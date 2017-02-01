---
layout: page
permalink: /mqtt/clients-topics-and-access-control/
title: "MQTT Docs: Client topics and access control"
---

# Client Topics and Access Control

## Overview of Client Topics

Client Topics is a powerful way for users to filter messages for each connected clients. A client topic is a string that represent different levels. For instance, a typical topic patten on STS-MQTT could be:

![MQTT topics](/assets/images/mqtt_client_topics.png)

All topics on the STS-MQTT platform are following the format of <code>{% raw %}users/{username}/{things name} {% endraw %}</code>. Users can only publish to the topics with the same username, but they can also subscribe to other public topics with a different username. Please refer to [Public and Private Topics](/mqtt/public-private-topics/) for more details on public and private topics, or [Topic patterns](/mqtt/topic-patterns/) for information on topic patterns. 

Users can access the Topics Management panel by clicking on the Topics button on the sidebar. In this panel, users can create, edit, view and delete MQTT topics.

## Manage Topics

### Create Topic

Users can create a new topic in the topic panel by clicking the "Add New" button. An *Add Topic* modal will be shown and prompt the users for information of the new topic to be created. The parameters include:

| Value | Description |
| Topic | (_Required_) The path of the topic. In default, each topic is started with "users/{username}" in the STS-MQTT system. |
| Name | (_Required_) The name of this topic path. |
| Description | (_Optional_) Detail description of this topic for user reference. |
| Is Private | This checkbox indicates whether this topic is public or private. If this is checked, only the user with the same username in the topic can subscribe to this topic. |


### View Topic

Users can view information of a topic by clicking on a topic. An *View Topic* modal will be shown.

In this modal, users can see information of this topic including: _topic_, _name_, _description_, _private state_.

Users can also view the recent messages published to this topic in the _Recent Messages_ section.

### Edit or Delete Topic

To edit or delete a topic, simply click on a topic in the topic panel. You can find the *Edit* and *Delete* buttons at the bottom of the modal. Simply click on these buttons.


>*Note* 
