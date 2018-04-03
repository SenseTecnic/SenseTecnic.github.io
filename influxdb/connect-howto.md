---
layout: page
permalink: /influxdb/connect-howto/
title: "InfluxDB Docs: Connect with FRED"
---

# Connect with FRED

Now that we have a database and database users set up, we'll use the Node-RED InfluxDB nodes to connect to the service using FRED.  First, we will create a flow that publishes messages to a topic on the service.

Head over to [FRED](https://fred.sensetecnic.com){:target="_blank"} and log in to your FRED account if needed.  For more information on how to use FRED see the [FRED Docs](http://sensetecnic.github.io/fred/){:target="_blank"}.

## Write data

We will first config an *InfluxDB out* node to write data to InfluxDB. Drag an *InfluxDB out* node to the editor canvas, and double click on the node to edit the configuration tab.

![influxdb_out_node_config.png](/assets/images/influxdb_out_node_config.png)

We will add new InfluxDb server configuration by clicking the edit button. 

![influxdb_add_new_server.png](/assets/images/influxdb_add_new_server.png)

Next, we enter the STS-InfluxDB URL in the host field and the database username and database user password that we created previously in the username and password field of the InfluxDB node config tab. The default port number is 8086.

The SSL is enabled on STS-InfluxDB. We will have to provide an TLS configuration. Check the checkbox "Eanble secure (SSL/TLS) connection" and create a new TLS configuration like the following. You do not need to provide any client certificate information.

![influxdb_tls_config.png](/assets/images/influxdb_tls_config.png)

Click the update button when you are finished.

Next, enter a measurement name for collecting some sensor data.  Let's call the measurement "test".

![influxdb_add_measurement.png](/assets/images/influxdb_add_measurement.png)

We can test writing some random sensor data to the measurement "test". Let's drag an inject node and a random node (You will need to install the random node if you don't have it in your node list. Please refer to [Node Package Installation](/fred/node-install/). Let's set the random node to this:

![influxdb_random_node_config.png](/assets/images/influxdb_random_node_config.png)

Now connect the inject node, the randome node and the InfluxDB out node. Your flow should look as follows:

![influxdb_write_data_flow.png](/assets/images/influxdb_write_data_flow.png)

Now, clicking on the inject node should allow you to write a random float number to your InfluxDB instance under measurement "test".

## Query data

We will drag an InfluxDB in node to query data from our InfluxDB instance. We first drag an InfluxDB in node to the editor. Double click on the node to edit the configuration tab.

Click to add new server, we will be using the user with read privilege. Then, in the query field, we will enter `select * from test`. This will return all the value from the measurement that we had used in the previous example.

Connect an inject node before the InfluxDB in node, and a debug node after the InfluxDB node:

![influxdb_query_flow.png](/assets/images/influxdb_query_flow.png)

When you inject the flow, you should see the debug node showing the returned query result:

![influxdb_query_result.png](/assets/images/influxdb_query_result.png)

>*Note:* Despite its name in the InfluxDB configuration, do not put your STS service credential in the Username and Password field.  Put the database user credential in these two fields.

Next, we had successfully connect your FRED instance with your InfluxDB database. We will see how we can use the web query tool to query data [next](/influxdb/query-tool/).

[Use the Web Query Tool >>](/influxdb/query-tool/)
