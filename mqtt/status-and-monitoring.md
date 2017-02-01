---
layout: page
permalink: /mqtt/real-time-status/
title: "MQTT Docs: Real Time Status and Monitoring"
---

# Real Time Status Monitoring

The information on the STS MQTT status page is also sent to MQTT topics for real time monitoring by FRED or any other MQTT client.

All messages related to your use of the service are sent to a special topic hierarchy: <code>{% raw %}users/{username}/$SYS/#{% endraw %}</code>.

Specifically the service sends data to the following topics:

| Topic | Description |
| ----- | ----------- |
| <code>{% raw %}users/{username}/$SYS/{broker-id}/infoMessages{% endraw %}</code> | information messages as shown on the [status page](http://mqtt.sensetecnic.com/status) |
| <code>{% raw %}users/{username}/$SYS/{broker-id}/errorMessages{% endraw %}</code> | error messages |
| <code>{% raw %}users/{username}/$SYS/{broker-id}/messages{% endraw %}</code> | messages published since the broker started |
| <code>{% raw %}users/{username}/$SYS/{broker-id}/messagesLastInterval{% endraw %}</code> | messages published during the last interval on the broker |
| <code>{% raw %}users/{username}/$SYS/{broker-id}/errors{% endraw %}</code> | total errors on the broker since startup | 
| <code>{% raw %}users/{username}/$SYS/{broker-id}/errorsLastInterval{% endraw %}</code> | errors on the broker for last interval | 
| <code>{% raw %}users/{username}/$SYS/{broker-id}/subscriptions{% endraw %}</code> | number of subscriptions during the last interval | 
| <code>{% raw %}users/{username}/$SYS/{broker-id}/connectedClients{% endraw %} | number of connectedClients during the last interval
 |


>*Note:* The <code>broker-id</code> is an internal identifier for the specific MQTT broker in our cluster handling your connection. The service status window aggregates these counts across all currently running brokers.  It is subject to change depending on which broker in the service is handling your connection.


