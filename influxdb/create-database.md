---
layout: page
permalink: /influxdb/create-database/
title: "InfluxDB Docs: Create a database"
---

# Creating a database

To store your time series data in the InfluxDb service, you'll need to create a database.

![influxdb_view_database.png](/assets/images/influxdb_view_database.png)

Click on the *Databases* tab to view the databases list, then click on the **+ NEW** button. A window will appear as shown below.

Once you have created a database, the names of all of your databases will listed in this tab in the form `{username}_{database}` where `username` is your Sense Tecnic service username and `database` is the name of the database you created.  You will only need to fill in the database name as suggested in the *New Database* window. 

![influxdb_new_database.png](/assets/images/influxdb_new_database.png)

To get started, let's create a database named "demo_database". Once you clicked **Confirm and Create**, you should see your new database on the list.

![influxdb_new_database_added.png](/assets/images/influxdb_new_database_added.png)

You can now create database users to connect to the database as described [next](/influxdb/create-user/).

[Create a database user >>](/influxdb/create-user/)

