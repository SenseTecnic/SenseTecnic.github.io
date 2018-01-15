---
layout: page
permalink: /desktop/faq/
title: "FRED Desktop: FAQ"
---
# FAQ

This FAQ should answer some of your questions about FRED Desktop. For general questions about the FRED Service, see the [FRED FAQ](/fred/faq).  If you have any others, [let us know](mailto:info@sensetecnic.com).

- [How do I get FRED Desktop?](#q-how-do-i-get-fred-desktop)
- [How is FRED Desktop different from Node-RED?](#q-how-is-it-different-from-node-red)
- [How does it work?](#q-how-does-it-work)
- [How many copies of FRED Desktop can I use?](#q-how-many-copies-can-i-run)

## Q. How do I get FRED Desktop?

FRED Desktop can be downloaded from the STS Manager service agents page [here](https://manager.sensetecnic.com/dash/agents) by paid FRED subscribers.  For more information on installation see the [documentation](/desktop).

## Q. How is it different from Node-RED?

FRED Desktop bundles Node-RED with additional features for ease of use, setup and configuration, and full support from [Sense Tecnic Systems](http://sensetecnic.com) for popular desktop operating systems: - Windows, Mac OS and Ubuntu.  These features currently include:

- simple installation using platform-specific installers
- integrated console output in the UI - no need to open a terminal window to see Node-RED console output.
- status page to view the status of all nodes in your flows
- bundled MQTT nodes that persist outgoing messages if internet connectivity is lost, or FRED Desktop restarts.
- Integrated cookbook to install and test sample flows.
- easy access to dashboards created using Node-RED.
- professional support from Sense Tecnic Systems.

## Q. How does it work?

The FRED Desktop is an [Electron application](https://electronjs.org/).  Electron is a cross platform desktop application framework built on Javascript and Node.js; the same technologies at the core of Node-RED.  By embedding Node-RED in Electron, FRED Desktop makes it easier to install Node-RED and extend it's capabilities without the need to install Node.js on the command line.  Sense Tecnic leverages the Node-RED runtime API, bundled and custom nodes to implement FRED Desktop's features.

## Q. How many copies can I run?

FRED Desktop is managed using the [STS Manager Service](https://manager.sensetecnic.com).  Depending on your paid FRED subscription service you can install FRED Desktop on 1 or more desktop PCs.

*Note that free FRED Short plan users cannot install FRED Desktop.  For more information on installation see the [documentation](/desktop).*