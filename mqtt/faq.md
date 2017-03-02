---
layout: page
permalink: /mqtt/faq/
title: "MQTT Docs: FAQ"
---
# FAQ
Hopefully this answer's some of your questions the STS MQTT service. If you have any others, [let us know](mailto:info@sensetecnic.com).

- [Who are you guys?](#q-who-are-you-guys)
- [How is your MQTT service different?](#q-how-is-your-mqtt-service-different)
- [Are there limits to how I can use the service?](#q-are-their-limits-to-the-service)
- [How much does it (will it) cost?](#q-how-much-does-it-cost)
- [Where can I find documentation and more information?](#q-where-can-i-find-documentation-and-more-information)
- [How do I connect my device to the service?](#q-how-do-i-connect-my-device-to-the-service)
- [How do I connect using Node-RED on FRED?](#q-how-do-i-connect-using-node-red-on-fred)
- [What are public topics and how can I make one?](#q-what-are-public-topics-and-how-can-i-make-one)

___

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We've been working with Node-RED for a while, and created the cloud-hosted
FRED service.  We focus on easy to use IoT services for small to medium sized businesses and systems integrators.  Like the FRED
service we've built the STS MQTT service because we think its needed - and we like building cool stuff!

### Q. How is your MQTT service different?
Our shared MQTT service has a few unique features:
* Easy to use management interface for viewing information and error messages and sending and receiving test messages.
* Simple way to manage credentials for connections using Client ID's and keys.
* Support for public topics shared with other users on the system.
* Tightly integrated with our FRED cloud hosted Node-RED service.
* We focus on providing support for small to medium sized companies looking for easy to use IoT solutions.

### Q. Are their limits to the service?
During testing, the service is limited to 5 Client IDs (connections) per registered user.  This will change once the service goes live and may
include message/data volume and connection limits depending on the plan.

### Q. How much does it cost?
During testing the service is free.  When ready, the cost of the service will be competitive with other MQTT service offerings.

### Q. Where can I find documentation and more information?
See our [documentation page](http://docs.sensetecnic.com/mqtt), or contact us [by email](mailto:info@sensetecnic.com). 

### Q. How do I connect my device to the service?
First, [Create a Client](/mqtt/create-client/) and then connect using the MQTT protocol using your device configuration or MQTT
client library.  Ensure you set the MQTT protocol username to your STS MQTT username, the MQTT Client ID for the connection to your STS MQTT
Client ID, and the password to your Client Key (NOT your STS password).

### Q. How do I connect using Node-RED on FRED?
[Create a Client](/mqtt/create-client/) and then connect using MQTT nodes on FRED [as described here](/mqtt/connect-howto). 

### Q. What are public topics and how can I make one?
Public topics are topics that *any* user of the STS MQTT service can subscribe to.  To create a public topic,
simply uncheck check the 'Is Private' checkbox in the Topic edit page to make it available for other users.  See 
[Create a Topic](/mqtt/create-topic/) in [the documentation](http://docs.sensetecnic.com/mqtt)
for more information.