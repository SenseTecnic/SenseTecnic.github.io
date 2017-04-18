---
layout: page
permalink: /mqtt/topics-and-access-control/
title: "MQTT Docs: Topics and access control"
---

# Topics and Access Control

A connected client device or system like Node-RED can connect to any Topic in your topic starting with `{% raw %}users/{username}{% endraw %}`.  To create a Client record including the Client ID and Client Key needed to connect see [Managing Clients and Keys](/mqtt/managing-clients-and-keys/).

Your clients cannot publish data to any other topics, other than those in your namespace.

If you would like to monitor messages published to a specific topic on the service, or make a topic available to other STS MQTT users, you can create a Topic record.

A Topic on the STS MQTT service is an MQTT topic extended with a friendly name and description, and a public/private flag.


An MQTT topic is a string that is used to filter messages for each connected client.  A topic consists of one or more different levels separated by a forward slash.  For example:

![MQTT topics](/assets/images/mqtt_client_topics.png)

For more information on MQTT topics see: (ref)

All topics that you publish data to on the STS-MQTT platform must start with <code>{% raw %}users/{username}{% endraw %}</code>. Clients can not only subscribe to topics in the user's namespace but also `public` topics from a different user.  Please refer to [Public and Private Topics](/mqtt/public-private-topics/) for more details on public and private topics, and [Topic patterns](/mqtt/topic-patterns/) for information on topic patterns. 

Users can access the Topics Management panel by clicking on the Topics button on the sidebar. In this panel, users can create, edit, view and delete MQTT topics.

## Managing Topics

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


