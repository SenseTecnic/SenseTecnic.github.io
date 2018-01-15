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

You can find appropriate package to your computer from the [Manager Downloads](https://manager.sensetecnic.com/dash/agents) page.

**Windows**:  Download the supplied `FRED Desktop Setup {version}.exe` file.  Double click on this file to install FRED Desktop on Windows.

FRED Desktop settings including license file, and Node-RED flows are located in `C:\Users\{username}\.sts-fred`.

**Mac OS**:  Download the supplied `FRED Desktop-{version}.dmg` file to your Mac.  Open this file then drag the FRED Desktop icon to your Applications.

Settings including license file, and Node-RED flows are located in the directory `/Users/{username}/.sts-fred`.

**Linux**:  Download the supplied `fred-desktop_{version}_amd64.deb` file. Move it to your home directory.  Open a terminal window and use the following commands:

    cd ~
    sudo dpkg -i fred-desktop_{version}_amd64.deb

On Ubuntu, FRED Desktop settings including license file, and Node-RED flows are located in `/home/{username}.sts-fred`.

After installation, you will be asked to register your FRED Desktop with the STS Manager by providing your FRED username and password as shown.
![desktop-register.png](/assets/images/desktop-register.png)

By registering you will be creating a license file in your `.sts-fred` directory that needs to be present for FRED Desktop to start.  Depending on your FRED subscription, you will be limited to the number of times you can register and run FRED Desktop.

If you need to re-register your FRED Desktop or move it to another PC for some reason, delete the corresponding device entry in the Manager, and the `license.json` file in your `./sts-fred` folder.

## Upgrades

Remove the previous version of the application, then install the new version.  Your settings will be preserved in the `.sts-fred` directory

## Feedback

The FRED Desktop is currently pre-release for testing and feedback.  Please let us know the FRED Version number when you report feedback and bug reports by sending an email to [info@sensetecnic.com](mailto:info@sensetecic.com).

Information on the current roadmap for the FRED Desktop [is maintained here](/desktop/roadmap).

Next: [FRED Desktop Main Window](main-window)