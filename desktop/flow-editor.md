---
layout: page
permalink: /desktop/flow-editor/
title: Flow Editor
---
# Flow Editor

The Flow Editor pane displays the Node-RED editor and a console pane below.  You can edit your flows here.  Note that you will need to
enter a name and password to unlock the editor if you have set a password in the [settings](/desktop/settings).

Note that FRED Desktop also exposes the Node-RED editor on the local machine port 1880 by default, so that you can access the editor from a
standard browser by accessing [http://localhost:1880/red](http://localhost:1880/red).

## Installing Nodes

To install additional nodes, you must have NPM installed.  To do so, download and install the 8.x LTS version of [Node.js](https://nodejs.org/en/).

Once NPM is installed, the Node-RED Palette Manager will be enabled.  To install a custom Node,click on _Manage Palette_ from the Node-RED editor menu (top right), and then select the *Install* tab in the palette manager. You can now search for new nodes to install, update, and enable and disable existing nodes.  For more information see the Node-RED documentation on [Adding Nodes](https://nodered.org/docs/getting-started/adding-nodes).

Next: [Connections](/desktop/connections)