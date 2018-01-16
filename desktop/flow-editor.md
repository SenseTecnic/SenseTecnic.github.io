---
layout: page
permalink: /desktop/flow-editor/
title: Flow Editor
---
# Flow Editor

The Flow Editor pane displays the Node-RED editor and a console pane below.  You can edit your flows here.  Note that you will need to enter a name and password to unlock the editor if you have set a password in the [settings](/desktop/settings).

![desktop-flow-editor.png](/assets/images/desktop-flow-editor.png)

Note that FRED Desktop also exposes the Node-RED editor on a local port, so that you can access the editor from a
standard browser.  You can open a your default browser on the editor by clicking on the external link icon beside *Flow Editor* in the navigation bar, or by clicking on the port number on the side bar.

## Installed Nodes

In addition to the core nodes, the FRED Desktop comes with several nodes pre-installed and available in the editor palette.

* **[node-red-contrib-opcua v0.2.20](https://flows.nodered.org/node/node-red-contrib-opcua)** 
* **[node-red-contrib-sts-mqtt v0.0.4](https://flows.nodered.org/node/node-red-contrib-sts-mqtt)**
* **[node-red-dashboard v2.5.1](https://flows.nodered.org/node/node-red-dashboard)** 
* **[node-red-node-mongodb v0.0.13](https://flows.nodered.org/node/node-red-node-mongodb)**
* **[node-red-node-mysql v0.0.16](https://flows.nodered.org/node/node-red-node-mysql)**
* **[node-red-node-sqlite v0.1.2](https://flows.nodered.org/node/node-red-node-sqlite)**
* **[node-red-node-influxdb v0.2.1](https://flows.nodered.org/node/node-red-contrib-influxdb)**
* **[node-red-contrib-mqttdb v0.1.0](https://flows.nodered.org/node/node-red-contrib-mqttdb)**

## Installing Additional Nodes

To install additional nodes, you must have NPM installed.  To do so, download and install the 8.x LTS version of [Node.js](https://nodejs.org/en/).

Once NPM is installed, the Node-RED Palette Manager will be enabled.  To install a custom Node,click on _Manage Palette_ from the Node-RED editor menu (top right), and then select the *Install* tab in the palette manager. You can now search for new nodes to install, update, and enable and disable existing nodes.  For more information see the Node-RED documentation on [Adding Nodes](https://nodered.org/docs/getting-started/adding-nodes).

Next: [Dashboard](/desktop/dashboard)