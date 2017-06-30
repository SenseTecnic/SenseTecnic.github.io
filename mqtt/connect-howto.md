---
layout: page
permalink: /mqtt/connect-howto/
title: "MQTT Docs: Connect using FRED"
---

# Connecting using FRED

Now that we have a client set up, we'll use the standard MQTT nodes to connect to the service using FRED.  First, we will create a flow that publishes messages to a topic on the service using FRED.

First, head over to [FRED](https://fred.sensetecnic.com) and log in to your FRED account if needed.  For more information on how to use FRED see the [FRED Docs](http://sensetecnic.github.io/fred/).

Drag an inject node to the canvas and configure it to send a string 'Hello World' to a test topic.  Note that you have access to all topics on the MQTT service that start with `users/{username}` where username is your Sense Tecnic and FRED username.

For example, if your username were `fred`, we would configure it to send data to `users/fred/test` as shown.

![inject_config.png](/assets/images/mqtt_inject_config.png)

Drag an MQTT output node onto the Node-RED canvas and connect it to the inject node.  Your flow should look as follows:

![flow.png](/assets/images/mqtt_flow.png)

Click on the 'Server' pop up and select 'add new MQTT broker...'.  In this configuration, set the broker host to `mqtt.sensetecnic.com` and leave the port as `1883`.  Set the Client ID to the client id you created, for example, `fred-b738c479`.  

![connection tab.png](/assets/images/mqtt_connection_tab.png)

It is recommended to create MQTT connection with SSL connection to ensure security if you can. To use SSL connection, simply change the port number to `8883`. and then check the box "Enable secure (SSL/TLS) connection". A new TLS configuration drop down menu will be shown. By default, "add new tls-config..." is selected in the drop down menu, just click the edit button to enter the tls config tab. All you need to do is to uncheck "verify server certificate", and then click the "Add" button to add the TLS configuration.

Click on the Security tab, and fill in your username in the username field.  In the password field, fill in the Client Key that you created, for example,
`51zytzw7b9`.

>*Note:* Despite its name in the MQTT configuration, do not put your STS service password in the Password field.  Put the Client Key in this field that
corresponds to the Client ID.

![security tab.png](/assets/images/mqtt_security_tab.png)

Leave the configurations in the 'Birth Message' and 'Will Messages' tabs as is (default).

Click `Done` and you're ready to go.

By clicking on the Inject node, you are publishing messages on your topic.  To verify this, lets add an MQTT input node on the same client MQTT connection.

Drag an MQTT input node to the canvas underneath the existing flow.  Set the topic to the same topic you used, e.g. `users/fred/test`, and configure the `Server` selection to use the same connection you created before.  Add a debug node to the output of this MQTT input node.  Your new flow should look as follows:

![output flow.png](/assets/images/mqtt_output_flow.png)

Now, when you click on your inject node in the first flow, messages should appear in the debug output on FRED/Node-RED.  The 'hello world' message will travel through the MQTT output node, to the broker topic, back through the connection to the subscribing input node, and to the debug window.

Next, lets use the MQTT service to view messages sent to this topic from the STS-MQTT management UI [next](/mqtt/create-topic/).

[Create a Topic >>](/mqtt/create-topic/)
