---
layout: page
permalink: /desktop/settings/
title: Settings
---
# Settings

The settings pane allows you to configure the FRED desktop settings.  Currently this includes:

### Node-RED Directory
This is where Node-RED stores flows and installed nodes.  By default these are stored in the `~/.sts-fred/node-red`

### Node-RED Port
The port that Node-RED runs on.

### Console logging level
Change the logging level for Node-RED as shown in the UI.  Normally this should be at `info` but may be changed to `debug` for more verbose Node-RED log output.

### Secure Editor
Click this checkbox to secure the Node-RED editor access with a username and password.

### Save and Reset
If you change any settings, you will need to _Save_ them, and then restart the application for the settings to take effect.
Clicking on _Reset_ resets the settings to factory defaults.  To take effect, the application needs to be restarted.

### Settings Storage
The FRED Desktop settings are stored in your platform's *home* directory in a directory called `.sts-fred`.  There you will find a `settings.json` file, as well as a `node-red` directory which is where Node-RED stores flows and installed Nodes.  [Persistent message storage](/desktop/connections) are stored in the `mqttdb` directory inside the `node-red` directory.

Next: [Connections](/desktop/connections)