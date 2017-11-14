---
layout: page
permalink: /gateway/
title: "FRED Gateway: Intro"
---
# Introduction

The FRED Gateway is a Node-RED desktop distribution bundled with additional features for ease of use, setup and configuration, and full support from [Sense Tecnic Systems](http://sensetecnic.com).  For more information on the Node-RED system see [the documentation](https://nodered.org/docs).  Sense Tecnic also provides [the Node-RED Guide](http://noderedguide.com/) and a number of Node-RED tutorials on the [developer site](https://developers.sensetecnic.com).

## Why FRED Gateway?

Normally, to install Node-RED on a desktop OS like Windows, Mac OS and Linux, you will need to install Node.js, and then install and configure Node-RED on the command line.  The FRED Gateway uses the cross platform [Electron](https://electron.atom.io/) desktop application framework popularized by applications such as Slack and Spotify.  Using the FRED Gateway, you simply install the desktop application and double click on the icon to get started with Node-RED.

## Installation

Mac OS:

Windows:

Linux:

TODO

## Installed Nodes

In addition to the core nodes, the FRED Gateway comes with several nodes pre-installed:

 * **[node-red-contrib-opcua v0.2.20]()** - for communicating with OPC UA servers
 * **[node-red-contrib-sts-mqtt v0.0.4]()** - connect to the STS MQTT Service
 * **[node-red-dashboard v2.5.1]()** - use the powerful Node-RED Dashboard for monitoring
 * **[node-red-node-mongodb v0.0.13]()** - access MongoDb
 * **[node-red-node-mysql v0.0.16]()** - use MySQL
 * **[node-red-node-sqlite v0.1.2]()** - host a local lightweight database for your flows

Other nodes can be installed as needed using the [Flow Editor](/gateway/flow-editor).

## Prerelease Feedback
The FRED Gateway is currently pre-release for testing and feedback.  Please let us know the FRED Version number when you report feedback and bug reports by sending an email to [info@sensetecnic.com](mailto:info@sensetecic.com).

Information on the current roadmap for the FRED Gateway [will be maintained here](/gateway/roadmap).

Next: [FRED Gateway Main Window](main-window)