---
layout: page
permalink: /influxdb/manage-users-privileges/
title: "InfluxDB Docs: Manage users and privileges"
---

# Managing Users and Privileges

Users in InfluxDB defines who can access the database to write or read data. When you create a new database, by default there is no users exist for this database and you will need to create one if you want to access the database from outside of STS-InfluxDB.

## Creating a user

To create a user, click on the Users and Privileges page, then click on the `+ New` button.  This will bring up the `Create Database User` modal. The name of the database user will be started with your STS services username, and is in the form of "{Your STS service username}_{your database username}".  Note that the database username must be globally unique.

You will also need to enter the password for the password field. You can either enter your own password, or generate random password by clicking the Generate button.   

>*Note:* Once the user is created and the form is submitted, the password will not be shown again. If you forgot the database user password, you will have to regenerate the password.

You can set the user privilege when you create the database user or edit after. Please refer to the following [part](#edit-privileges) for information on the user privileges.

Once you have a user, you do the following:

* [Change or Reset password](#change-or-reset-password)
* [Edit privileges](#edit-privileges)
* [Delete user](#delete-user)

___

### Change or Reset password

When you click `Edit`, you will see a "Edit Database User" modal shows up in the browser. If you need to change or reset your password, you can either enter your new password or click the "Generate" button to generate a new password.

### Edit privileges

When you click `Edit` button, you will see the "Edit Database User" modal, and you should see the list of user privileges in the bottom half of the modal.

You can:
- Add New Privilege: by clicking `+ Add New Privilege`, and you will be prompt to set the correct privilege. A use can be either:
    - Write Only: the database user can only write to a database, and is not allowed to read or query data from the database
    - Read Only: the database user can only read or send query command to a database, but is not allowed to write data to the database
    - Read & Write: the database user is allowed to both read and write data to the database.

    You will also need to select the target database in the drop down menu to indicate the effective database. Once you finish, just simply click the submit button to finish.

- Edit existing previleges: by choosing new values in the dropdown menu to set the updated privileges. Once you finish choosing the correct options, simply click the submit button to finish.

- Remove existing previleges: click the Remove button by the existing privileges and that listed privilege will be removed. Click Submit to udpate the change.

### Delete user

To delete a database user, click on `DELETE` and you will be prompted to confirm deleting your database user.
