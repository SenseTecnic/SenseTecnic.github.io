---
layout: page
permalink: /mqtt/create-topic/
title: "MQTT Docs: Create a topic"
---

# Create a topic

By creating a managed topic on the STS MQTT service, you can provide a name and description of the data sent to this topic, view messages sent to the topic, and make the topic stream public using the management UI.

To do so, click on the [Topics tab](http://mqtt.sensetecnic.com/dash/topics), then click on the 'Add New' button.  Fill in the form to create your topic.  For example, lets call our topic 'test' to view messages from our Node-RED flow as shown:

![test_topic.png](https://bitbucket.org/repo/dMMejn/images/2166164683-test_topic.png)

Click on 'Add' to add the new topic.

In the topic list, click on the topic to view it.  

Now, click on the 'Inject' node in the FRED/Node-RED flow in another browser window.

You should see messages appear in the topic view window as shown:

![view_topic.png](https://bitbucket.org/repo/dMMejn/images/581779175-view_topic.png)

You are now ready to put the STS MQTT service to work for you, creating additional clients and topics for your application.

[[Home]]