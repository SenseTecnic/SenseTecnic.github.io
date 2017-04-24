---
layout: page
permalink: /influxdb/create-user/
title: "InfluxDB Docs: Create a user"
---

# Creating a user

Before you can connect, write data or query a database, you will need to create database users and set the privileges of each database user appropriately.

![influxdb_users_tab.png](/assets/images/influxdb_users_tab.png)

Click on the **Users and Privileges** tab to view the users list, then click on the **+ NEW** button. A window will appear as shown below.

![influxdb_new_user_window.png](/assets/images/influxdb_new_user_window.png)

The names of all databases users will be in the form of `{username}_{database_username}`. You will only need to fill in the database username as suggested in the *Users and Privileges* window. 

You can either enter your own database user password or click the **Generate** button to generate a random password. Either way, be sure to memorize or record the password so you can enter it later.  Once the new database user is created and form is submitted, the password will not be shown again; it is hashed by the service.  If you forget, you will need to generate a new password.

Next, you need to set the privileges of the database user. Click on the **Add New Privilege** button to do this. Using the available options, you can set the database user priveledges to one of the following:

- **Read Only**: This user will only be allowed to query data from the database, and is not allowed to write new data into the database. 

- **Write Only**: This user will only be allowed to write data to the database, and is not allowed to requery historical data from the database.

- **Read & Write**: This user is allowed to both read from and write to the specified database.

For example, lets create a database user for one of our flows that writes sensor data to a database.  To do so, we will create a user that has "write only" privilege to "testrobot1_testdb".  This database user will only be allowed to write data to the "testrobot1_testdb" database, and will never query data.

![influxdb_new_user_privilege_window.png](/assets/images/influxdb_new_user_privilege_window.png)

Once you click submit, you will see the new user appear on the user list with the privileges details shown:

![influxdb_new_user_created.png](/assets/images/influxdb_new_user_created.png)

Next, lets create a database user for another flow that is used only for querying (reading) data from the database:

![influxdb_read_user.png](/assets/images/influxdb_read_user.png)

You can now connect to the STS-InfluxDB from FRED as described [next](/influxdb/connect-howto/).

[Connect with FRED >>](/influxdb/connect-howto/)

