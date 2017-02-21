---
layout: page
permalink: /mqtt/create-client/
title: "MQTT Docs: Create a client"
---

# Creating a client

Next, you'll need to create a client so you can connect to the MQTT service.  A client corresponds to a connection from FRED or Node-RED or a connection to a device.

![mqtt_clients_panel.png](/assets/images/mqtt_clients_panel.png)

Click on the Clients tab, then on the 'Add New' button.  A form will appear as shown below.

Fill in the form.  The service will generate a unique Client id for you based on your username, and a client key.  You can edit these fields if you like, but the client id must be unique to the system.

![client_form.png](/assets/images/mqtt_client_form.png)

Add a name and description for the client, describing the device or connection that this client corresponds to.  Copy the Client ID and the Client Key somewhere.  You will need these for your device or Node-RED MQTT configuration to connect to the system.

>*Note:* Once the new client is created and form is submitted, the key will not be shown again; it is hashed by the system.  If you forget, you will need to generate a new key.

Click on 'Add' to create the new client.  You are now ready to send and receive messages to the service as described [next](/mqtt/connect-howto/).

![mqtt_client_card.png](/assets/images/mqtt_client_card.png)

[Connect using FRED >>](/mqtt/connect-howto/)

