---
layout: page
permalink: /fred/http-access/
title: "FRED Docs: http-access"
---

# Accessing Your Node HTTP Endpoints.


## HTTP Input Nodes

___

**FRED v1.0 UPDATE**

HTTP endpoint proxy has been changed in FRED v1.0. The base URL for accessing a user's instance has been changed to `https://{username}.fred.sensetecnic.com`. Please update any clients connecting to a FRED instance with the new URL scheme as the old URL path will be deprecated and removed.

___

FRED proxies all communication from the Internet to your instance of Node-RED.  To dispatch to your instance, FRED uses your username in a header for private API input nodes, or the URL for public HTTP input nodes.

### Public HTTP Input Nodes
To create an HTTP input node accessible by anyone, prefix the URL field of the HTTP In node with `/public/`.  After deploying the flow, the endpoint can be accessed at `https://{username}.fred.sensetecnic.com/api/public/{custom_endpoint_name}`. For example, an HTTP Input node called `/public/data` created by user `roberto` will be accessible as `https://roberto.fred.sensetecnic.com/api/public/data`. For compatibility reasons, we recommend to not name any HTTP input endpoint with "/ui" since it will clash with the node-red-dashboard UI endpoint.

### Private API HTTP Input Nodes
For an HTTP client to access protected HTTP input nodes in your flows there are two ways you can access your instance.

#### Basic Auth

You may provide your username and password using basic authentication. For example: 

	curl --user <username>:<password> https://{username}.fred.sensetecnic.com/api/{custom_endpoint_name}

#### API Key

Like a password, the API key is used by FRED to authenticate the request.  An API is generated for you when you register, and can be regenerated using the [Profile](/fred/profile) dialog.

Note that if you regenerate your API key, existing HTTP clients will no longer have access to your flows.

To make a request to a protected HTTP input node, your username and API key must be added to the request HTTP headers as follows:

    X-Auth-User: {username}
    X-Auth-Key: {apikey}

For example, to make a request to a node with the URL `/thing`, you make HTTP requests to: `https://{username}.fred.sensetecnic.com/api/thing`.  To illustrate we created a flow that takes in an HTTP input, sends the payload to the debug console, and sends a response back:

![fred dashboard](/assets/images/sample_http_in1.png "Logo Title Text 1")

The flow definition is shown here:

    [{"id":"18bdd439.e7422c","type":"http in","name":"/thing","url":"/thing","method":"post","x":104,"y":297,"z":"663faab1.99c054","wires":[["875057e1.78afa8","700ce276.8ff31c"]]},{"id":"875057e1.78afa8","type":"debug","name":"","active":true,"console":"false","complete":"false","x":358,"y":297,"z":"663faab1.99c054","wires":[]},{"id":"19a90a46.e656f6","type":"http response","name":"response to /thing","x":368,"y":439,"z":"663faab1.99c054","wires":[]},{"id":"700ce276.8ff31c","type":"function","name":"generate response","func":"msg.payload = { value:12, status:\"active\" };\nreturn msg;","outputs":1,"valid":true,"x":183,"y":398,"z":"663faab1.99c054","wires":[["19a90a46.e656f6"]]}]

To POST JSON data to the `/thing` HTTP input node above you can use the following curl command:

    curl -d '{"message":"message to thing"}' https://{username}.fred.sensetecnic.com/api/thing -H "Content-Type: application/json" -H "X-Auth-User: {user}" -H "X-Auth-Key: {apikey}"

The response will be:

    {
        "value": 12,
        "status": "active"
    }

And the text `{"message":"message to thing"}` should appear in the node-red debug console.

## Input Nodes

Because FRED acts as a proxy, and hosts your Node-RED instance behind a firewall there are limitations on the accessibility of certain input nodes from client applications on the Internet.  In Node-RED, nodes such as the TCP and UDP input nodes can be configured to create servers that listen on specified ports.  Because these ports are not open to your instance on FRED, they are not reachable by clients.  We currently only proxy certain HTTP URLs including HTTP input nodes as documented in the HTTP Input node sections above.

Specifically, the following nodes can be configured to 'Connect to' an outside server, but cannot be set up to 'Listen on' a specific port (or URL):

* TCP Input/Output
* UDP Input/Output