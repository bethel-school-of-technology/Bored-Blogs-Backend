const path = require('path');
let app_folder_name = path.basename(__filename);
//! u need the private key ask jacob for it!
let privateKey = '../bethel_final.pem';
// TODO: ADD YOUR IP ADDRESS BELOW (e.g. '12.34.5.67')
let host = 'ec2-52-91-103-255.compute-1.amazonaws.com';


//npm install node-cmd node-ssh
var cmd = require('node-cmd');
var path, node_ssh, ssh, fs;
fs = require('fs');
path = require('path');
node_ssh = require('node-ssh');
ssh = new node_ssh();

// the method that starts the deployment process
function main() {
    console.log('Deployment started.');
    sshConnect();
}

// installs PM2
function installPM2() {
    return ssh.execCommand(
        'sudo npm install pm2 -g', {
        cwd: '/home/ubuntu'
    });
}

// transfers local project to the remote server
function transferProjectToRemote(failed, successful) {
    return ssh.putDirectory(
        '../' + app_folder_name,
        `/home/ubuntu/${app_folder_name}-temp`,
        {
            recursive: true,
            concurrency: 1,
            validate: function (itemPath) {
                const baseName = path.basename(itemPath);
                return (
                    baseName.substr(0, 1) !== '.'
                    && baseName !== 'node_modules' // do not allow dot files
                    && baseName !== 'config'
                ); // do not allow node_modules
            },
            tick: function (localPath, remotePath, error) {
                if (error) {
                    failed.push(localPath);
                    console.log('failed.push: ' + localPath);
                } else {
                    successful.push(localPath);
                    console.log('successful.push: ' + localPath);
                }
            }
        }
    );
}

// creates a temporary folder on the remote server
function createRemoteTempFolder() {
    var command = `rm -rf ${app_folder_name}-temp && mkdir ${app_folder_name}-temp`;
    //console.log("check this command")
    //console.log(command);
    return ssh.execCommand(
        command, {
        cwd: '/home/ubuntu'
    });
}

// stops psql and node services on the remote server
function stopRemoteServices() {
    return ssh.execCommand(
        'pm2 stop all && sudo service psql stop', {
        cwd: '/home/ubuntu'
    });
}

// updates the project source on the server
function updateRemoteAppPre() {
    var command = `mkdir ${app_folder_name}`
    return ssh.execCommand(
        command, {
        cwd: '/home/ubuntu'
    });
}
function updateRemoteApp() {
    var command = `cp -r ${app_folder_name}-temp/* ${app_folder_name}/ && rm -rf ${app_folder_name}-temp`
    console.log("command 2")
    console.log(command)
    return ssh.execCommand(
        command, {
        cwd: '/home/ubuntu'
    });
}

// restart psql and node services on the remote server
function restartRemoteServices() {
    return ssh.execCommand(
        `cd ${app_folder_name} && sudo service psql start && pm2 start app.js`, {
        cwd: '/home/ubuntu'
    });
}

// connect to the remote server
function sshConnect() {
    console.log('Connecting to the server...');

    ssh
        .connect({
            host: host,
            username: 'ubuntu',
            privateKey: privateKey
        })
        .then(function () {
            console.log('SSH Connection established.');
            console.log('Installing PM2...');
            return installPM2();
        })
        .then(function () {
            console.log(`Creating \`${app_folder_name}-temp\` folder.`);
            return createRemoteTempFolder();
        })
        .then(function (result) {
            const failed = [];
            const successful = [];
            if (result.stdout) {
                console.log('STDOUT: ' + result.stdout);
            }
            if (result.stderr) {
                console.log('STDERR: ' + result.stderr);
                return Promise.reject(result.stderr);
            }
            console.log('Transferring files to remote server...');
            return transferProjectToRemote(failed, successful);
        })
        .then(function (status) {
            if (status) {
                console.log('Stopping remote services.');
                return stopRemoteServices();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        //mkdir ${app_folder_name}
        .then(function (status) {
            if (status) {
                console.log('Updating remote app pre');
                return updateRemoteAppPre();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then(function (status) {
            if (status) {
                console.log('Updating remote app.');
                return updateRemoteApp();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then(function (status) {
            if (status) {
                console.log('Restarting remote services...');
                return restartRemoteServices();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then(function () {
            console.log('DEPLOYMENT COMPLETE!');
            process.exit(0);
        })
        .catch(e => {
            console.error(e);
            process.exit(1);
        });
}

main();