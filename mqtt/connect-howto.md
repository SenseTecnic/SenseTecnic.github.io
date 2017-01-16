---
layout: page
permalink: /mqtt/connect-howto/
title: "MQTT Docs: Connect using FRED"
---

# Connecting using FRED

Now that we have a client set up, we'll use the standard MQTT nodes to connect to the service using FRED.  First, we will create a flow that publishes messages to a topic on the service using FRED.

Log in to your FRED account.  For more information on how to use FRED see the [FRED Docs](http://sensetecnic.github.io/fred/).

Drag an inject node to the canvas and configure it to send a string 'Hello World' to a test topic.  Note that you have access to all topics on the MQTT service that start with `users/{username}` where username is your Sense Tecnic username.

For example, if your username were `fred`, we would configure it to send data to `users/fred/test` as shown.

![inject_config.png](https://bitbucket.org/repo/dMMejn/images/119638286-inject_config.png)

Drag an MQTT output node onto the Node-RED canvas and connect it to the inject node.  Your flow should look as follows:

![flow.png](https://bitbucket.org/repo/dMMejn/images/773412675-flow.png)

Click on the Server pop up and select 'add new MQTT broker...'.  In this configuration, set the broker host to `mqtt.sensetecnic.com` and leave the port as `1883`.  Set the Client ID to the client id you created, for example, `fred-b738c479`.  Leave the topic, qo, retain and other configurations as is, since we will set them via a message property or use the defaults.

![connection tab.png](https://bitbucket.org/repo/dMMejn/images/1776506545-connection%20tab.png)

Click on the Security tab, and fill in your username in the username field.  In the password field, fill in the Client key that you created, for example, `51zytzw7b9`.

![security tab.png](https://bitbucket.org/repo/dMMejn/images/2853760873-security%20tab.png)

Click `Done` and you're ready to go.

By clicking on the Inject node, you are publishing messages on your topic.  To verify this, lets add an MQTT input node on the same client MQTT connection.

Drag an MQTT input node to the canvas underneath the existing flow.  Set the topic to the same topic you used, e.g. `users/fred/test`, and configure the `Server` selection to use the same connection you created before.  Add a debug node to the output of this MQTT input node.  Your new flow should look as follows:

![output flow.png](https://bitbucket.org/repo/dMMejn/images/417479647-output%20flow.png)

Now, when you click on your inject node in the first flow, messages should appear in the debug output on FRED/Node-RED.  The 'hello world' message will travel through the MQTT output node, to the broker topic, back through the connection to the subscribing input node, and to the debug window.

Lets use the MQTT service to view messages sent to this topic from the STS-MQTT management UI [next](Create a topic),