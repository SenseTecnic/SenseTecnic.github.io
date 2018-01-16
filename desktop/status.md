---
layout: page
permalink: /desktop/status/
title: Status
---
# Status

The status page provides you with an overview of your flows, the status of nodes in your flows and information on MQTT connections using the MQTT db nodes.

![desktop-status.png](/assets/images/desktop-status.png)

## Flow Status

This section provide information on when the application was started, when flows were last deployed, the number of flows (tabs) in your system, and the total number of nodes.

## Node Status

This area lists all nodes in your flows that have provided status since the last deployment.  By viewing this list, you can be assured that all nodes are connecting properly to external resources.

## Connection Status

The *Connections Status* displays the current status of connections in all flows using the `mqttdb` nodes.  See [MQTT Connections](/desktop/connections/) for more info on these nodes.  You can clear the outgoing messages in the database using the *Clear* link beside the connection.

Next: [Cookbook](/desktop/cookbook)