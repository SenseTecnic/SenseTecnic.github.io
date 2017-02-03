---
layout: page
permalink: /fred/websocket-access/
title: "FRED Docs: Websocket Support"
---

## Websocket Nodes

___

**FRED v1.0 UPDATE**

HTTP endpoint proxy has been changed in FRED v1.0. The base URL for accessing a user's instance has been changed to `https://{username}.fred.sensetecnic.com`. Please update any clients connecting to a FRED instance with the new URL scheme as the old URL path will be deprecated and removed.

___

FRED proxies all communication from the Internet to your instance of Node-RED. To dispatch to your instance, FRED uses your username in a header for private API input nodes, or the URL for public Websockets input nodes. You can test your flows using wscat [https://www.npmjs.com/package/wscat](https://www.npmjs.com/package/wscat)

### Public Websocket Input Nodes

Like public HTTP input nodes, to create a Websocket input node accessible by anyone, prefix the `Path` config in your websocket listener node URL with `/public/`. You may access the websocket at `wss://{username}.fred.sensetecnic.com/api/public/{custom_endpoint_name}`. For example, a websocket input node configured with the path `/public/data` set up by user `mike` will be accessible as  `wss://mike.fred.sensetecnic.com/api/public/data` (wss for websocket secure). You could access this websocket using wscat using:

```
wscat -c "https://mike.fred.sensetecnic.com/public/data"
```

### Private Websocket Input Nodes

For an websockets client to access protected Websocket input nodes in your flows, you must provide your username and password using basic authentication, or your API key with your requests.

To connect to a web socket on a `/thing` listening node using basic authentication using the [wscat tool](https://github.com/websockets/wscat), use the following:

```
wscat --auth username:password -c "https://{username}.fred.sensetecnic.com/api/thing"
```

Like a password, the API key is used by FRED to authenticate the request.  An API is generated for you when you register, and can be regenerated using the Profile dialog.

Note that if you regenerate your API key, existing clients will no longer have access to your flows.

To make a request to a protected websocket input node, your username and API key must be added to the request headers as follows:

    X-Auth-User: {username}
    X-Auth-Key: {apikey}

For example, to make a request to a node with the configured path `/thing`, you make a websocket request to: `wss://{username}.fred.sensetecnic.com/api/thing`.  You could access this websocket with wscat using:

```
wscat -H x-auth-user:{username} -H x-auth-key:{apikey} -c "https://{username}.fred.sensetecnic.com/api/thing"
```
