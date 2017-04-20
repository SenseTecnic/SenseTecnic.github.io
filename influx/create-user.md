---
layout: page
permalink: /influx/create-user/
title: "InfluxDB Docs: Create a user"
---

# Creating a user

You will need to create database users and set the privileges of each database user account in order to connect, write and query to the databases. 

![influx_users_tab.png](/assets/images/influx_users_tab.png)

Click on the "Users and Privileges" tab to view the users list, then click on the '+ New' button. A window will appear as shown below.

![influx_new_user_window.png](/assets/images/influx_new_user_window.png)

The names of all the databases users will be in the form of "{your username}_{database username}". So you will only need to fill in the database username as suggested in the "Users and Privileges" window. 

You can either enter your own database user password or click the "Generate" button to generate a random password. If you generate a random password, be sure to note the password down.

>*Note:* Once the new user is created and form is submitted, the password will not be shown again; it is hashed by the system.  If you forget, you will need to generate a new password.

You will also need to set the privileges of the user. Click "Add New Privilege". As you see the options available, you can either set:

- Read Only: This user will only be allowed to query data from the database, and is not allowed to write new data into the database. 

- Write Only: This user will only be allowed to write data to the database, and is not allowed to requery historical data from the database.

- Read & Write: This user is allowed to both read from and write to the specified database.

Assume we want to create a user representing a sensor. This user(sensor) will only be allowed write data to the "testrobot1_testdb" database and will never query historical data. So we will create a user that has "write only" privilege to "testrobot1_testdb" as shown below.


![influx_new_user_privilege_window.png](/assets/images/influx_new_user_privilege_window.png)

Once you click submit, you will see the new user appear on the user list with the privileges detail:

![influx_new_user_created.png](/assets/images/influx_new_user_created.png)

You can also create a user just for querying data from the database:

![influx_read_user.png](/assets/images/influx_read_user.png)

You can now connect to the STS-InfluxDB from FRED as described [next](/influx/connect-howto/).

[Connect with FRED >>](/influx/connect-howto/)

