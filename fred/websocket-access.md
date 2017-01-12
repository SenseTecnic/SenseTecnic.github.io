---
layout: page
permalink: /fred/websocket-access/
title: websocket-access
---

## Websocket Nodes

FRED proxies all communication from the Internet to your instance of Node-RED. To dispatch to your instance, FRED uses your user name in a header for private API input nodes, or the URL for public Websockets input nodes. You can test your flows using wscat (https://www.npmjs.com/package/wscat)

### Public Websocket Input Nodes

Like public HTTP input nodes, to create a Websocket input node accessible by anyone, prefix your URL with `/public/` in the path option of the of the websocket node. To access the websocket  you will add `/public/{username}` to the client. For example, a websocket input node configured with the path `/public/data` set up by mike will be accessible as  `ws://fred.sensetecnic.com/public/mike/data`. You could access this websocket using wscat using:

```
wscat -c "http://fred.sensetecnic.com/public/mike/receive"
```

### Private Websocket Input Nodes

For an websockets client to access protected Websocket input nodes in your flows, you must provide your username and password using basic authentication, or your API key with your requests.

To connect to a web socket on a `/thing` listening node using basic authentication using the [wscat tool](https://github.com/websockets/wscat), use the following:

```
wscat --auth username:password -c "http://fred.sensetecnic.com/api/thing"
```

Like a password, the API key is used by FRED to authenticate the request.  An API is generated for you when you register, and can be regenerated using the Profile dialog.

Note that if you regenerate your API key, existing clients will no longer have access to your flows.

To make a request to a protected websocket input node, your username and API key must be added to the request headers as follows:

    X-Auth-User: {username}
    X-Auth-Key: {apikey}

For example, to make a request to a node with the configured path `/thing`, you make a websocket request to: `ws://fred.sensetecnic.com/api/thing`.  Note that there is no username in the URL, and your HTTP input node is prefixed with `/api`. You could access this websocket with wscat using:

```
wscat -H x-auth-user:{username} -H x-auth-key:{key} -c "http://fred.sensetecnic.com/api/thing"
```
