---
layout: page
permalink: /influx/faq/
title: "InfluxDB Docs: FAQ"
---
# FAQ
Hopefully this answers some of your questions the STS-InfluxDB service. If you have any others, [let us know](mailto:info@sensetecnic.com).

- [Who are you guys?](#q-who-are-you-guys)
- [How is your InfluxDB service different?](#q-how-is-your-influxdb-service-different)
- [Are there limits to how I can use the service?](#q-are-their-limits-to-the-service)
- [How much does it (will it) cost?](#q-how-much-does-it-cost)
- [Where can I find documentation and more information?](#q-where-can-i-find-documentation-and-more-information)
- [How do I set up my database?](#q-how-do-i-set-up-my-database)
- [How do I connect on FRED?](#q-how-do-i-connect-the-database-on-fred)

___

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We've been working with Node-RED for a while, and created the cloud-hosted
FRED service.  We focus on easy to use IoT services for small to medium sized businesses and systems integrators.  Like the FRED and STS-MQTT
service we've built the STS-InfluxDB service because we think its needed - and we like building cool stuff!

### Q. How is your InfluxDB service different?
Our shared InfluxDB service has a few unique features:
* Easy to use management interface for databases, database users and privileges.
* Simple way to manage credentials for connections using database users and password.
* Easy access query tool to quickly query and debug data.
* Tightly integrated with our FRED cloud hosted Node-RED service.
* We focus on providing support for small to medium sized companies looking for easy to use IoT solutions.

### Q. Are their limits to the service?
*Place holder*

### Q. How much does it cost?
*Place holder*

### Q. Where can I find documentation and more information?
See our [documentation page](http://docs.sensetecnic.com/influx), or contact us [by email](mailto:info@sensetecnic.com). 

### Q. How do I set up my database?
First, [Create a database](/influx/create-database/), and then [create database users](/influx/create-user) with the correct read/write previleges. Now you are good to go!  

### Q. How do I connect the database on FRED?
You will need the user with correct read/write previleges. Use the InfluxDB node [as described in here](/influx/connect-howto). Ensure you enter the correct database user credential (not your STS service user credentials!) 

