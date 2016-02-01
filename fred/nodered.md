---
layout: default
permalink: /fred/nodered/
---
## Node-RED in FRED

The current current version of Node-RED used by FRED is based on `0.12.4`.  The (minor) UI changes made to Node-RED are maintained at [github.com/mblackstock/node-red-contrib](https://github.com/mblackstock/node-red-contrib).  See the `fred-develop` and `fred-master` branch.

In addition to the core nodes, the following Node packages are installed:

    "node-red-contrib-freeboard": "mblackstock/node-red-contrib-freeboard",
    "node-red-contrib-influxdb": "0.0.4",
    "node-red-contrib-moment": "1.0.2",
    "node-red-contrib-postgres": "0.4.0",
    "node-red-contrib-pubnub": "0.0.3",
    "node-red-contrib-salesforce": "0.0.5",
    "node-red-contrib-slack": "SenseTecnic/node-red-slack",
    "node-red-contrib-wotkit": "0.2.10",
    "node-red-node-aws": "0.1.0",
    "node-red-node-badwords": "0.0.1",
    "node-red-node-delicious": "0.1.0",
    "node-red-node-dropbox": "0.1.0",
    "node-red-node-dweetio": "0.0.10",
    "node-red-node-email": "0.1.0",
    "node-red-node-feedparser": "0.1.3",
    "node-red-node-fitbit": "0.1.0",
    "node-red-node-flickr": "0.1.1",
    "node-red-node-forecastio": "0.1.0",
    "node-red-node-google": "0.1.0",
    "node-red-node-instagram": "0.1.0",
    "node-red-node-jawboneup": "0.1.0",
    "node-red-node-mongodb": "0.0.3",
    "node-red-node-mysql": "0.0.6",
    "node-red-node-openweathermap": "0.1.7",
    "node-red-node-pinboard": "0.1.0",
    "node-red-node-ping": "0.0.3",
    "node-red-node-pushbullet": "0.0.5",
    "node-red-node-rbe": "0.1.0",
    "node-red-node-smooth": "0.0.2",
    "node-red-node-strava": "0.1.0",
    "node-red-node-suncalc": "0.0.5",
    "node-red-node-tfl": "0.1.1",
    "node-red-node-twitter": "0.1.2",
    "node-red-node-weather-underground": "0.1.1",
    "node-red-node-wordpos": "0.0.1",
    "node-red-node-xmpp": "0.0.5",

Because FRED is a cloud-hosted service, it does not make sense to include nodes that access hardware or the underlying operating system.  The following core nodes are *disabled* in FRED:

    '75-exec.js'
    '35-arduino.js'
    '36-rpi-gpio.js'
    '25-serial.js'
    '28-tail.js'
    '50-file.js'
    '23-watch.js'
