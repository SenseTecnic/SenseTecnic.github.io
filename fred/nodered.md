---
layout: default
permalink: /fred/nodered/
---
## Node-RED in FRED

The current current version of Node-RED used by FRED is `0.10.3`

In addition to the core nodes, the following Node packages are installed:

    "node-red-contrib-wotkit":"SenseTecnic/wotkit-node",
    "node-red-node-web-nodes":"0.2.0",
    "node-red-node-pushbullet":"0.0.3",
    "node-red-node-wordpos":"0.0.1",
    "node-red-node-xmpp":"0.0.2",
    "node-red-node-badwords":"0.0.1",
    "node-red-node-suncalc":"0.0.5",
    "node-red-node-smooth":"0.0.2",
    "node-red-node-ping":"0.0.3",
    "node-red-contrib-moment":"1.0.2",

Because FRED is a cloud-hosted service, you are not permitted to use nodes that access hardware or the underlying operating system.  The following core nodes are *disabled* in FRED:

    '75-exec.js'
    '35-arduino.js'
    '36-rpi-gpio.js'
    '25-serial.js'
    '28-tail.js'
    '50-file.js'
    '23-watch.js'