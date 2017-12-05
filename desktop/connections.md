---
layout: page
permalink: /desktop/connections/
title: Flow Editor
---
# Connections and MQTT Nodes

The Connections tab and associated features are work in progress.  This tab will eventually provide information on the overall health of the flow and its connectivity to outside systems.

## MQTT DB Nodes

The FRED Desktop comes bundled with additional MQTT nodes called `mqttdb` available in the palette.  These nodes optionally persist
messages in a lightweight local database in case of a lost connection, crash or Node-RED restart.  Once the connection is re-established, messages that have been queued will be sent to the broker.

To enable persistent storage for input and output messages, click on the appropriate check boxes in the broker configuration.  You can change the *compaction interval time* to compact the internal database and remove deleted messages.

Database files for a connection are stored in the Node-RED directory under the *mqttdb* directory.  These can be safely removed after stopping Node-RED to clear unsent messages.  The database
used is [NeDB](https://github.com/louischatriot/nedb).

## Current Implementation

The Connections tab displays the current status of all MQTT connections in the application flow including the mqttdb broker connections.  Currently This shows the name of the broker configuration, whether it is connected or not.  If the MQTT connection uses the mqttdb nodes, the number of incoming and outgoing messages currently in the database is also shown.  You can clear incoming and outgoing messages in the database using the button on the connection.

### Known Issues

* This tab is not updated in real time.  To refresh, click
on another tab, then click back on this one.

* When a broker connection node is configured to persist incoming messages, the messages can be corrupted.  We recommend only configuring outgoing message persistence for now.

* The database used [NeDB](https://github.com/louischatriot/nedb) is similar to REDIS in that it maintains data in RAM and writes to a file in case it goes down.  Since it is RAM based, can only go so long storing messages before it may run into trouble.  Please let us know if you experience problems.

Next: [Cookbook](/desktop/cookbook)