---
layout: page
permalink: /mqtt/status/
title: "MQTT Docs: Viewing Status"
---

# Viewing Status

After you've logged in, you will be shown the Status page to see the status of your MQTT connections and subscriptions.  Click on the 'Status' tab on the left at any time to go back to this page.  Status provides you with real time and historical status about your use of the STS MQTT service.

The boxes indicate your current service statistics updated every few seconds. This includes the total number of messages sent by all of your clients, total number of errors reported, currently connected clients such as hardware devices and FRED MQTT server connections and subscriptions by devices or Node-RED MQTT input nodes.

The Information Messages log area displays real time information when clients connect and subscribe; the Error Messages contain error messages when they occur.

![status_page.png](/assets/images/mqtt_status_page.png)

Before you can use the service to send and receive messages, you'll need to create a Client described [next](/mqtt/create-client/).

[Create a Client >>](/mqtt/create-client/)
