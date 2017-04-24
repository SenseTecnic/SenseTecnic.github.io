---
layout: page
permalink: /influxdb/manage-databases/
title: "InfluxDB Docs: Manage Databases"
---

# Managing Databases

An InfluxDB database is a logical container for database users and time series data called *measurements*.  Measurements are containers for tags, fields, and the time column.  It's conceptually similar to a table in a SQL database.  The measurement name effectively describes the data stored in the associated fields.

## Creating a database

To create a database, click on the databases page, then click on the **+ NEW** button.  This will bring up the `New Database` modal. The name of the database will be started with your STS services username, and is in the form of `{username}_{databasename}`.  Note that the database name must be unique.

>*Note:* Once the database is created and the form is submitted, you cannot change the database name. If you need a different name for the database, you will have to create a new one.

Once you have a database, you can do the following:

* [Manage database users](#manage-users)
* [Connect via shell](#connect-via-shell)
* [Query using the query tool](#query-using-the-query-tool)
* [Delete the database](#delete-database)

___

### Manage users

When you click on `Manage Users`, you will be redirected to the *Users and Privileges* tab where you can see all the database users created for your instance. For more information, please refer to [Manage users and privileges](/influxdb/manage-users-privileges) for details.

### Connect via shell

When you click `Connect`, you will see the command of connecting to your database in shell.

### Query using the query tool

When you click `Query`, you will be redirect to the Query Tool tab where you can use the easy access web query tool to send query command to your database. You can refer to [Use the web query tool](/influxdb/query-tool) for more details.

### Delete Database 

To delete a database, click on `DELETE` and you will be prompted to confirm deleting your database.
