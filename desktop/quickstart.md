---
layout: page
permalink: /desktop/quickstart/
title: "FRED Desktop: Quick Start"
---

# Installation

You can find appropriate package to your computer from the [Manager Downloads](https://manager.sensetecnic.com/dash/agents) page.

**Windows**:  Download the supplied `FRED Desktop Setup {version}.exe` file.  Double click on this file to install FRED Desktop on Windows.

FRED Desktop settings including license file, and Node-RED flows are located in `C:\Users\{username}\.sts-fred`.

**Mac OS**:  Download the supplied `FRED Desktop-{version}.dmg` file to your Mac.  Open this file then drag the FRED Desktop icon to your Applications.

Settings including license file, and Node-RED flows are located in the directory `/Users/{username}/.sts-fred`.

**Linux**:  Download the supplied `fred-desktop_{version}_amd64.deb` file. Move it to your home directory.  Open a terminal window and use the following commands:

    cd ~
    sudo dpkg -i fred-desktop_{version}_amd64.deb

On Ubuntu, FRED Desktop settings including license file, and Node-RED flows are located in `/home/{username}/.sts-fred`.

After installation, you will be asked to register your FRED Desktop with the STS Manager by providing your FRED username and password as shown.
![desktop-register.png](/assets/images/desktop-register.png)

By registering you will be creating a license file in your `.sts-fred` directory that needs to be present for FRED Desktop to start.  Depending on your FRED subscription, you will be limited to the number of times you can register and run FRED Desktop.

If you need to re-register your FRED Desktop or move it to another PC for some reason, delete the corresponding device entry in the Manager, and the `license.json` file in your `./sts-fred` folder.

# Upgrades

Remove the previous version of the application, then install the new version.  Your settings will be preserved in the `.sts-fred` directory
