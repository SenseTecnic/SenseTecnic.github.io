---
layout: page
permalink: /mqtt/topic-patterns/
title: "MQTT Docs: Topic Patterns"
---

# Topic Patterns

Topics are used to classify and filter different MQTT messages. To achieve this goal, users need to follow and understand MQTT topic patterns.

## Topic Structures

![MQTT topics](/assets/images/mqtt_client_topics.png)

This is how a typical topic would look like on the STS-MQTT server. As you can see, topics has different levels, and each level is seperated by "/". On STS-MQTT, all topics start with _users_, and followed by the username of the topic owner. 

A topic may have many different levels for organizing messages. As you can see in the above sample topic, user can set different levels for better organization of messages sent to the server. You can treat mqtt topics as _channels_ for communication.

## Topic Level Wildcard

Users can use wildcard symbol to represent all topics at specific levels. 

### Single Level Using +

Users can use the plus sign in the topic to represent wildcard for one level. In this case, any topic with arbitrary string would match the level that contains the plus sign. For example, <code>{% raw %}users/tom/+/data{% endraw %}</code> would match the following:

* <code>{% raw %}users/tom/temperature/data{% endraw %}</code>
* <code>{% raw %}users/tom/humidity/data{% endraw %}</code>

but not the following:

* <code>{% raw %}users/tom/temperature{% endraw %}</code>
* <code>{% raw %}users/tom/data/humidity{% endraw %}</code>

### Multi Levels Using \#

Users can use the hashtag to represent multi levels. In this case, any topic with arbitrary string in arbitrary levels would match the level that contains the hashtag sign. Note that the hashtag symbol can only be presented at the end of a topic string. For example, <code>{% raw %}users/tom/temperature/#{% endraw %}</code> would match the following:

* <code>{% raw %}users/tom/temperature/data{% endraw %}</code>
* <code>{% raw %}users/tom/temperature/timestamp{% endraw %}</code>
* <code>{% raw %}users/tom/temperature/quality{% endraw %}</code>

but not the following:

* <code>{% raw %}users/tom/humidity/data{% endraw %}</code>
* <code>{% raw %}users/tom/temperature/data{% endraw %}</code>