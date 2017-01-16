---
layout: mqtt-page
permalink: /mqtt/status/
title: "MQTT Docs: Viewing Status"
---

# Viewing Status

After you log in, to view the status of your MQTT connections and subscriptions, click on the Status tab.  This page provides you with real time and historical status about your use of the STS MQTT service.

The boxes indicate your current service statistics updated every 10 seconds. This includes the total number of messages sent by all clients, total number of errors, currently connected clients (such as hardware devices and FRED MQTT server configurations) and subscriptions by devices or Node-RED MQTT input nodes.

The Information Messages log area displays real time information when clients connect and subscribe; the Error Messages contain error messages when they occur.

![status_page.png](/assets/images/mqtt_status_page.png)

Before you can use the service to send and receive messages, you'll need to create a Client described [next](/mqtt/create-client/).