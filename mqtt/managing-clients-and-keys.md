---
layout: page
permalink: /mqtt/managing-clients-and-keys/
title: "MQTT Docs: Managing Clients and Keys"
---

# Managing Clients and Keys

Clients represent client connections to the STS MQTT service from Node-RED or devices.  A Client record consists of a Client ID, a friendly name, description and a Client Key.  For every connection from a device, FRED or Node-RED MQTT server configuration node, you will need to create a Client.

## Creating a client

To create a client, click on the clients page, then click on the `+ New` button.  This will bring up the `Add Client` modal.  A Client ID and client key will be generated for you, or you can change these to create your own.  Note that the client ID must be globally unique.

Fill in an appropriate name and description. 

Copy the client key somewhere safe.  Fill in an appropriate name and description.  It will be needed when you connect your device or Node-RED.  Once you create your client key, the server forgets the key and it cannot be recovered.

>*Note:* Once the new Client is created and form is submitted, the Client Key will not be shown again; it is hashed by the system.  If you forget, you will need to generate a new key.

Once you have a client, you need to configure your MQTT client credentials as follows:

* MQTT username: your STS MQTT username
* MQTT Client ID: Client ID you've generated or entered.
* MQTT password: Client Key (NOT your service password).

Once your client is connected, it can publish or subscribe to any topic in your namespace.

## View and Update Clients

In the Clients panel, you will be able to see a list of all the Clients you've created either in a list or card view.  Click on the `Edit` button of the client you want to view or edit and an *Edit Client* modal will be shown with the client information.

If you've forgotten your Client Key and need to regenerate another, simply click the *Regenerate Key* button and copy the new client key.

![mqtt_regenerate_key.png](/assets/images/mqtt_regenerate_key.png)

>*Note:* Any clients that were previously connected using the previous key will no longer be able to connect to the service.

## Delete Client  

To delete a client, click on `DELETE` or the `X` icon in the client card.
