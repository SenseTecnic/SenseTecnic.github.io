---
layout: page
permalink: /influxdb/faq/
title: "InfluxDB Docs: FAQ"
---
# FAQ
Hopefully this answers some of your questions the STS-InfluxDB service. If you have any others, [let us know](mailto:info@sensetecnic.com).

- [Who are you guys?](#q-who-are-you-guys)
- [How is your InfluxDB service different?](#q-how-is-your-influxdb-service-different)
- [Where can I find documentation and more information?](#q-where-can-i-find-documentation-and-more-information)
- [How do I set up my database?](#q-how-do-i-set-up-my-database)
- [How do I connect on FRED?](#q-how-do-i-connect-the-database-on-fred)
- [What InfluxDb features are not available on the STS-MQTT service?](#q-what-influxdb-features-are-not-available-on-the-sts-mqtt-service)

___

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We've been working with Node-RED for a while, and created the cloud-hosted
FRED service.  We focus on easy to use IoT services for small to medium sized businesses and systems integrators.  We built the STS-InfluxDB service to support FRED users who need time series data storage.

### Q. How is your InfluxDB service different?
Our shared InfluxDB service has a few unique features:
* Easy to use management interface for databases, database users and privileges.
* Simple way to manage credentials for database access.
* Easy to use query tool to quickly query your stored data.
* Tight integration with our FRED cloud-hosted Node-RED service.
* We focus on providing support for small to medium sized companies looking for easy to use IoT solutions.

### Q. Where can I find documentation and more information?
See our [documentation page](http://docs.sensetecnic.com/influx), or contact us [by email](mailto:info@sensetecnic.com). 

### Q. How do I set up my database?
First, [Create a database](/influxdb/create-database/), and then [create database users](/influxdb/create-user) with the correct read/write previleges. Now you are good to go!

### Q. How do I connect to my database from FRED?
After creating a database, and a database user with a password using the STS-InfluxDb management interface, use the [InfluxDB node [as described here](/influxdb/connect-howto) on FRED to connect your flow to your database. Ensure you enter the correct database and database user credentials (not your STS service user credentials).

### Q. What InfluxDb features are not available on the STS-MQTT service?
- retention policies
- continuous queries
- You should also take a look at the [query page](/influxdb/query-language/).

### Q. What are the limits for the service?
Currently the InfluxDB service is available to the FRED Grande and FRED Venti plan subscribers. 
- The <a href="https://users.sensetecnic.com/subscriptions">FRED Grande</a> plan limits you to **1 database**, **1 database user** and **2 day data retention** with **50mb** database size. 
- The <a href="https://users.sensetecnic.com/subscriptions">FRED Venti</a> plan allows you to create up to **5 databases**, **5 database users** and have a **30 day data retention** and **500mb** database size.