---
layout: default
permalink: /fred/userdocs/
---
## Documentation

FRED consists of two different views, your FRED home page and the Node-RED client application.

If you are logged in, your full name entered during registration will appear in the top right of the FRED navigation bar.  Under this pull down there are several options:

- **Node-RED** - link to your Node-RED administration user interface.  
- **Profile** - Brings up a modal dialog for you to edit your user profile. 
- **Status** - this brings up a status window containing information about your Node-RED instance and a button to start and stop your Node-RED instance
- **Log out** - log out of FRED.

### Node-RED
Note that if your instance of Node RED is not running currently, this option will be disabled.  Once in Node-RED, you can go back to your FRED home page or logout of FRED using the menu under the User icon.

### Profile
This dialog allows you to change your full name, email address, and password.  In this dialog you can also view and regenerate your API key.

### Status
In this dialog, you can see the time the instance was last started, and received data, as well as view the last on your Node-RED output.  There is a large button there allowing you to start and stop your instance.  To refresh the contents of your Node-RED output, click on the refresh button.

## API Key and HTTP Input Nodes
FRED proxies all communication from the Internet to your instance of Node-RED.  For an HTTP client to access the HTTP input nodes in your flows, you must provide your username and API key with your HTTP requests.  Like a password, the API key is used by FRED to authenticate your request.  An API is generated for you when you register, and can be regenerated using the Profile dialog.  Note that if you regenerate your API key, existing HTTP clients will no longer have access to your flows.

To make a request, your username and API key must be added to the following HTTP headers:

    X-Auth-User: {username}
    X-Auth-Key: {apikey}

You make HTTP requests to: `https://fred.sensetecnic.com/api`

For example, we created a flow that takes in an HTTP input, sends the payload to the debug console, and sends a response back as illustrated below:

![example input](../../images/sample_http_in1.png "Logo Title Text 1")

The flow definition is shown here:

    [{"id":"18bdd439.e7422c","type":"http in","name":"/thing","url":"/thing","method":"post","x":104,"y":297,"z":"663faab1.99c054","wires":[["875057e1.78afa8","700ce276.8ff31c"]]},{"id":"875057e1.78afa8","type":"debug","name":"","active":true,"console":"false","complete":"false","x":358,"y":297,"z":"663faab1.99c054","wires":[]},{"id":"19a90a46.e656f6","type":"http response","name":"response to /thing","x":368,"y":439,"z":"663faab1.99c054","wires":[]},{"id":"700ce276.8ff31c","type":"function","name":"generate response","func":"msg.payload = { value:12, status:\"active\" };\nreturn msg;","outputs":1,"valid":true,"x":183,"y":398,"z":"663faab1.99c054","wires":[["19a90a46.e656f6"]]}]

To POST JSON data to the `/thing` HTTP input node above you can use the following curl command:

    curl -d '{"message":"message to thing"}' https://fred.sensetecnic.com/api/thing -H "Content-Type: application/json" -H "X-Auth-User: {user}" -H "X-Auth-Key: {apikey}"

The response will be:

    {
        "value": 12,
        "status": "active"
    }

And the text `{"message":"message to thing"}` should appear in the node-red debug console.
