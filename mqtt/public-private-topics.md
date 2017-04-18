---
layout: page
permalink: /mqtt/public-private-topics/
title: "MQTT Docs: Public and Private topics"
---

# Public and Private Topics

STS-MQTT provides access control management on topics. When users create topics in the Topics panel, users can set whether a topic is private or public. 

## Public Topic vs Private Topic

The difference in public and private topic is mainly in the access permission in subscribing to a topic.

* *Public Topic:* All users are allowed to subscribe to a public topic
* *Private Topic:* Only the user with the same username in the topic is allowed to subscribe to a private topic

## Edit Privacy of a topic

To edit the privacy of a topic, simply click on a topic in the topic panel. As the *View Topic* modal shows up, you can click the _Edit_ button at the bottom of the modal to edit the setting of the topic. For more information of managing topics, please refer to [Topics and Access Controls](/mqtt/topics-and-access-control/)

>*Note:* The setting of the privacy of a topic would only affect the access permission of the subscription to a topic. For publishing to a topic, only the topic owner, or the user with the same username in the topic has access. 