---
layout: page
permalink: /fred/node-install/
title: "FRED Docs: Node Install"
---

# Installing Node Packages for your Instance

FRED provides a [list of node packages](/fred/supported-nodes) that are available to be installed and used in your flows.

For security and technical reasons, we do not allow custom installation of node packages by the user for their instance.

If you'd like additional node packages to be made available on FRED, [please let us know](mailto:info@sensetecnic.com). The proposed node package will be evaluated and tested before it can be made available. 

Since FRED is running in the cloud, there are limitations to what nodes we can support. Nodes that require direct connection to a hardware or special system level access will not work and cannot be accepted. Also, please make sure that the proposed node adheres to the Node-RED node package rules and naming conventions [found here](http://nodered.org/docs/creating-nodes/packaging.html).

## How to Install Nodes on your Instance

1. Log into your FRED instance [here](https://users.sensetecnic.com/login?return=https://fred.sensetecnic.com).
2. From the sidebar, click on "Add or Remove Nodes" to open up the node panel on the right. (See image below)
3. By default, nodes are filtered by categories. You can click on a category of choice or search for the node using the search bar. Alternatively you can click on "Alphabetical" at the top of the node panel and view the list of nodes alphabetically.
4. Click on a node package in the list to view its detailed information on the right hand side.
5. Click the checkbox next to the node package name or the "Install" button inside the node details panel to install the node.
6. Restart your instance 
7. The newly installed nodes should be available inside your Node-RED instance node palette.

**IMPORTANT** your instance must be restarted in order for any changes to your installed node packages to take effect.

[![node install](/assets/images/fred-nodeinstall.png)](/assets/images/fred-nodeinstall.png)

## Default Node Packages

The following node packages or node sets are installed by default:

- node-red-dashboard
- node-red-node-twitter

## Required Node Packages

Some node packages that come with the standard Node-RED distribution are installed by default and cannot be removed.

- node-red-node-rbe
- node-red-node-email
- node-red-node-twitter
- node-red-node-feedparser
- node-red-contrib-fred
