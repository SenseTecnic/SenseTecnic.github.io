---
layout: page
permalink: /desktop/connections/
title: MQTT Connections
---
# MQTT Connections

The FRED Desktop comes bundled with additional MQTT nodes called `mqttdb` available in the Node-RED palette.  Unlike the core MQTT nodes, these nodes optionally persist messages in a lightweight local database in case of a lost connection, crash or Node-RED restart.  Once the connection is re-established, messages that have been queued will be sent to the configured broker.

![desktop-connections.png](/assets/images/desktop-connections.png)

To enable persistent storage for input and output messages, click on the appropriate check boxes in the broker configuration.  You can change the *compaction interval time* to compact the internal database and remove deleted messages.

![desktop-connections-config.png](/assets/images/desktop-connections-config.png)

Database files for a connection are stored in the Node-RED directory under the *mqttdb* directory.  These can be safely removed after stopping Node-RED to clear unsent messages.

## Connection Status

When using these nodes, messages sent are saved in a database between Node-RED deployments, application restarts and loss of network connectivity.  When connectivity is re-established, messages will then be sent to the broker.

The Connection Status section on the [Status page](/desktop/status) will display the number of outgoing messages pending to each MQTT broker.  To clear the messages in the database, you can click on the *Clear* link there.

### Known Issues

* When a broker connection node is configured to persist incoming messages, the messages can be corrupted.  We recommend only configuring outgoing message persistence for now.

* The database used [NeDB](https://github.com/louischatriot/nedb) is similar to REDIS in that it maintains data in RAM and writes to a file in case it goes down.  Since it is RAM based, can only go so long storing messages before it may run into trouble.  Please let us know if you experience problems.

Next: [Roadmap and Feedback](/desktop/roadmap)