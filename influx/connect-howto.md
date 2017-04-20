---
layout: page
permalink: /influx/connect-howto/
title: "InfluxDB Docs: Connect with FRED"
---

# Connect with FRED

Now that we have a database and database users set up, we'll use the InfluxDB nodes to connect to the service using FRED.  First, we will create a flow that publishes messages to a topic on the service using FRED.

First, head over to [FRED](https://fred.sensetecnic.com){:target="_blank"} and log in to your FRED account if needed.  For more information on how to use FRED see the [FRED Docs](http://sensetecnic.github.io/fred/){:target="_blank"}.

## Write data

We will first config an InfluxDB out node to write data to the InfluxDB. We first drag an InfluxDB out node to the editor. Double click on the node to edit the configuration tab.

![influx_out_node_config.png](/assets/images/influx_out_node_config.png)

We will add new server config to this node by clicking the edit button. 

![influx_add_new_server.png](/assets/images/influx_add_new_server.png)

As you can see, we enter the STS-InfluxDB URL in the host field. We use the database username and database user password in the username and password field of the InfluxDB node config tab. The default port number would be 8086.

Then, we can click the update button, and enter the measurement that we are interested in. Let's say the measurement is called "test".

![influx_add_measurement.png](/assets/images/influx_add_measurement.png)

We will first test writing a random number as in the payload to the measurement "test". Let's drag an inject node and a random node (You will need to install the random node if you don't have it in your node list. Please refer to [Node Package Installation](/fred/node-install/).) Let's set the random node to this:

![influx_random_node_config.png](/assets/images/influx_random_node_config.png)

Now connect the inject node, the randome node and the InfluxDB out node. Your flow should look as follows:

![influx_write_data_flow.png](/assets/images/influx_write_data_flow.png)

Now, clicking on the inject node should allow you to write a random float number to your InfluxDB instance under measurement "test".

## Query data

We will drag an InfluxDB in node to query data from our InfluxDB instance. We first drag an InfluxDB in node to the editor. Double click on the node to edit the configuration tab.

Click to add new server, we will be using the user with read privilege:

![influx_add_new_read_user.png](/assets/images/influx_add_new_read_user.png)

Then, in the query field, we will enter "select * from test". This will return all the value from the measurement that we had used in the previous example.

Connect an inject node before the InfluxDB in node, and a debug node after the InfluxDB node:

![influx_query_flow.png](/assets/images/influx_query_flow.png)

When you inject the flow, you should see the debug node showing the returned query result:

![influx_query_result.png](/assets/images/influx_query_result.png)

>*Note:* Despite its name in the InfluxDB configuration, do not put your STS service credential in the Username and Password field.  Put the database user credential in these two fields.

Next, we had successfully connect your FRED instance with your InfluxDB database. We will see how we can use the web query tool to query data [next](/influx/query-tool/).

[Use the Web Query Tool >>](/influx/query-tool/)
