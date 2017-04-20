---
layout: page
permalink: /influxdb/create-database/
title: "InfluxDB Docs: Create a database"
---

# Creating a database

First, you'll need to create an InfluxDB database so you can use the STS-InfluxDB service. A database is where you store all the data. 

![influxdb_view_database.png](/assets/images/influxdb_view_database.png)

Click on the Databases tab to view the databases list, then click on the '+ New' button. A window will appear as shown below.

The names of all the databases will be in the form of "{your username}_{database name}". So you will only need to fill in the database name as suggested in the "New Database" window. 

![influxdb_new_database.png](/assets/images/influxdb_new_database.png)

Let's create a database named "demo_database". Once you clicked "Confirm and Create", you should see the new database on the list.

![influxdb_new_database_added.png](/assets/images/influxdb_new_database_added.png)

You can now create users to the database as described [next](/influxdb/create-user/).

[Create a user >>](/influxdb/create-user/)

