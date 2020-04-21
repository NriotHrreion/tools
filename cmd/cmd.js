/**
 * Copyright (c) 2020 NriotHrreion <nriot233@outlook.com>
 */

var c;
var flag = 0;

function start() {
    if(flag == 0) {
        console.log("Starting the Console command...");
        c = new Cmd();
        flag = 1;
    } else {
        console.warn("The Console command has been started.");
    }
}

function close() {
    if(flag == 1) {
        console.log("Closing the Console command...");
        c = undefined;
        flag = 0;
    } else {
        console.warn("The Console command has been closed.");
    }
}

class Cmd {
    help() {
        console.log("c.help()\nc.info()\nc.title(tit{String})\nc.ping(ip{String})");
    }

    info() {
        console.log("Web cmd\nCopyright (c) 2020 NriotHrreion <nriot233@outlook.com>\nDesign by Microsoft, npmjs\n\nThe Web cmd is making on my free times, there may be some bugs.\nIf you found bug in it, please tell me.\n\nAnd it does not support many commands, I'll keep updating.\nThanks for your use!");
    }

    /**
     * @param {String} tit 
     */
    title(tit) {
        document.title = tit;
    }

    /**
     * @param {String} ip 
     */
    ping(ip) {
        $.ping({
            url: ip,
            beforePing: function() {},
            afterPing: function(data) {
                console.log(data +"ms");
            },
            interval: 0.5
        });
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
}
