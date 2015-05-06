---
layout: default
permalink: /fred/nodered/
---
## Node-RED in FRED

The current current version of Node-RED used by FRED is based on `0.10.6`.  The (minor) UI changes made to Node-RED are maintained at [github.com/mblackstock/node-red-contrib](https://github.com/mblackstock/node-red-contrib).  See the `fred-develop` and `fred-master` branch.

In addition to the core nodes, the following Node packages are installed:

    "node-red-contrib-wotkit":"0.2.1",
    "node-red-node-web-nodes":"0.3.2",
    "node-red-node-pushbullet":"0.0.5",
    "node-red-node-wordpos":"0.0.1",
    "node-red-node-xmpp":"0.0.2",
    "node-red-node-badwords":"0.0.1",
    "node-red-node-suncalc":"0.0.5",
    "node-red-node-smooth":"0.0.2",
    "node-red-node-ping":"0.0.3",
    "node-red-contrib-moment":"1.0.2",

Because FRED is a cloud-hosted service, it does not make sense to include nodes that access hardware or the underlying operating system.  The following core nodes are *disabled* in FRED:

    '75-exec.js'
    '35-arduino.js'
    '36-rpi-gpio.js'
    '25-serial.js'
    '28-tail.js'
    '50-file.js'
    '23-watch.js'