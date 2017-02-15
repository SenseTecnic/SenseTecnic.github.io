---
layout: page
permalink: /fred/release-notes/
title: "FRED Docs: Release Notes"
---

# FRED Release Notes

### Version 1.0 (2017-02-14)
___

- Improved and simplified back-end proxy mechanism for better compatibility with Node-RED node packages. Base URL of a user's instance has been changed to `https://{username}.fred.sensetecnic.com`. All http node and websocket access as well as node-red-dashboard URL will be prefixed by the new URL. Old base URL scheme will remain for a short period to allow the transition to the new URL.

- Moved FRED database to [Atlas MongoDB](https://www.mongodb.com/cloud/atlas) for better performance, scalability and backups.

- Improved error handling.

- Improved administrative features.

- Added node-red-contrib-web-worldmap to [available nodes](/fred/supported-nodes).

### Version 0.16 (2017-01-09)
___

- Added ability for users to share their Node-RED UI dashboard via a URL. For details see [Node-RED Dashboard Sharing](/fred/dashboard-sharing) Currently this feature is only avaiable to users subscribed to the [FRED Tall Plan](https://fred.sensetecnic.com/pricing).

- Added custom error pages and improved error handling for instances.

- Updated Node-RED to version 0.15.3.

### Version 0.15.3 (2017-01-06)
___

- Added node-red-contrib-blynk-websockets to [available nodes](/fred/supported-nodes).

- Added node-red-contrib-ckants to [available nodes](/fred/supported-nodes).

### Version 0.15.2 (2016-12-05)
___

- Added node-red-node-darksky to [available nodes](/fred/supported-nodes).

- Updated node-red-dashboard to 2.1.0.

- Updated node-red-node-forecastio to 0.1.12.

### Version 0.15.1 (2016-11-22)
___

- Added node-red-contrib-predix-timeseries to [available nodes](/fred/supported-nodes).


### Version 0.15.0 (2016-11-07)
___

- Improved security and better integration with Node-RED flow file encryption mechanism.

- Extensive back-end work.

- Added node-red-contrib-soap2 to bundled nodes.

- Added node-red-contrib-particle to bundled nodes.

- Updated node-red-contrib-influxdb to 0.0.6.

- Updated Node-RED to version 0.15.1.

### Version 0.14.1 (2016-10-12)
___

- Added node-red-contrib-boolean-logic to [available nodes](/fred/supported-nodes).

### Version 0.14.0 (2016-10-03)
___

- Added node-red-dashboard to [available nodes](/fred/supported-nodes). The old node-red-contrib-ui node is now deprecated but will be backwards compatible (renamed to legacy ui node). 

- Updated sample flow to use new dashboard node.

- Front-end static files minification.

- Added node-red-contrib-netatmo-dashboard to [available nodes](/fred/supported-nodes).

### Version 0.13.1 (2016-08-30)
___

- Added node-red-contrib-sqlite to [available nodes](/fred/supported-nodes).

### Version 0.13.0 (2016-08-26)
___

- Added node management feature. User can now install and remove nodes from a predefined list through their dashboard.

- Extensive back-end work.

### Version 0.12.1 (2016-08-02)
___

- Improved UI response when the instance is starting. The UI will now display the loading process even after a refresh when starting the instance.

- Updated Node-RED to version 0.14.6.

### Version 0.12.0 (2016-07-20)
___

- FRED now runs node-red instances in Docker containers.

- Bumped node version requirement to 4.4.7.

### Version 0.11.0 (2016-06-23)
___

- Extensive back-end work.

### Version 0.10.0
___

- Added support for subscription mechanism.

### Version 0.9.1 (2016-03-21)
___

- Updated Node-RED to version 0.13.3.

### Version 0.9.0 (2016-02-16)
___

- New FRED dashboard interface.

- Improved error handling

### Version 0.8.1 (2016-01-18)
___

- moved FAQ to documentation site

### Version 0.8.0 (2015-11-29)
___

- Back-end work.

### Version 0.7.2 (2015-10-14)
___

- Added node-red-contrib-influxdb to [available nodes](/fred/supported-nodes).

- Added node-red-contrib-pubnub to [available nodes](/fred/supported-nodes).

### Version 0.7.1 (2015-10-08)
___

- Back-end work.

### Version 0.6.0 (2015-09-28)
___

- Added support for websockets proxies to be able to serve ws:// urls (websockets server)

- Back-end upgrades and improvements.

### Version 0.5.0 (2015-08-31)
___

- Back-end work and improvements.

### Version 0.4.0 (2015-07-22)
___

- Updated Node-RED to version 0.11.1.

- Added node-red-node-rbe to [available nodes](/fred/supported-nodes).

- Added node-red-node-dweetio to [available nodes](/fred/supported-nodes).

- Wotkit user integration.

- Added links to developer site.

### Version 0.3.0 (2015-06-25)
___

- Added node-red-contrib-slack to [available nodes](/fred/supported-nodes).

- Back-end work.

### Version 0.2.0 (2015-06-09)
___

- Back-end work.

- Added feedback button (integration with JIRA).

### Version 0.1.4 (2015-05-06)
___

- Updated node-red-node-web-nodes to version 0.3.2.

- Updated node-red-node-pushbullet to version 0.0.5.

- UI updates.

- Added support for Http Input nodes

### Version 0.1.3 (2015-04-01)
___

- Updated Node-RED to version 0.10.6.

### Version 0.1.1 (2015-03-06)
___

- Updated Node-RED version to 0.10.3.

- Improved site navigation.

- Added automatic attempt to restart crashed instances.

- UI bug fixes.

- Back-end work.

### Version 0.1. (2015-02-02)
___

+ Initial Release of FRED.
