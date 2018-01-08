---
layout: page
permalink: /desktop/
title: "FRED Desktop: Intro"
---
# Introduction

FRED Desktop bundles Node-RED with additional features for ease of use, setup and configuration, and full support from [Sense Tecnic Systems](http://sensetecnic.com) for desktop operating systems - Windows, Mac OS and Ubuntu.  For more information on the Node-RED system see [the documentation](https://nodered.org/docs).  Sense Tecnic also provides [the Node-RED Guide](http://noderedguide.com/) and a number of Node-RED tutorials on the [developer site](https://developers.sensetecnic.com).

## Why FRED Desktop?

Normally, to install Node-RED on a desktop OS you will need to install Node.js, and then install and configure Node-RED on the command line.  Using the FRED Desktop, you simply install the desktop application and double click on the icon to get started with Node-RED.  FRED Desktop comes bundled with additional nodes and functionality to view dashboards, automatically create flows using the cookbook, and view flow status.

## Installation

Mac OS:  Download the supplied `FRED Desktop-{version}.dmg` file to your Mac.  Open this file then drag the FRED Desktop icon to your Applications.

Windows:  Download the supplied `FRED Desktop Setup {version}.exe` file.  Double click on this file to install FRED Desktop on Windows.

Linux:  Download the supplied `fred-desktop_{version}_amd64.deb` file. Move it to your home directory.  Open a termal window and use the following commands:

    cd ~
    sudo dpkg -i fred-desktop_{version}_amd64.deb

## Upgrades

Remove the previous version of the application, then install the new version.  Your settings will be preserved in the `.sts-fred` directory

## Prerelease Feedback

The FRED Desktop is currently pre-release for testing and feedback.  Please let us know the FRED Version number when you report feedback and bug reports by sending an email to [info@sensetecnic.com](mailto:info@sensetecic.com).

Information on the current roadmap for the FRED Desktop [is maintained here](/desktop/roadmap).

Next: [FRED Desktop Main Window](main-window)