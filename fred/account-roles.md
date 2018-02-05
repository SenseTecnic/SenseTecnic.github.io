---
layout: page
permalink: /fred/account-roles/
title: "FRED: Accounts and Access Control"
---

# Accounts, Members and Access Control

FRED supports multi tenancy by letting you create organization style "multi-user" accounts to support share the use of your Node-RED instances with other users.

After creating a multi-user account you can add other FRED users as members to your account and they will be able to use your FRED instance depending on the access role you give them. 

Account members can be managed here: [https://users.sensetecnic.com/app/accounts/members](https://users.sensetecnic.com/app/accounts/members).

___

**Note** 

Members can only be added to a "multi-user" type account. [Click here](https://users.sensetecnic.com/app/accounts/new) to sign up for a multi-user account.

___


### Account Owner

Owners can create, update instances, associate members with instances.  They are also the user who pays for the accounts.

### Account Admin

If the account member is an 'admin', they are the equivalent of owners with the exception that they cannot create new instances or change the account subscription.

### Account User

If the account member is a user, they are the equivalent of admins, except that they cannot update, or create instances, cannot change user permissions, cannot change instance related permissions such as enable public dashboard.

### Guest

If the account member is a 'guest', they cannot view the FRED dashboard nor the Node-RED editor.  They will be presented with a list of available instances and dashboards to view under that account.


## Detailed Account Role Permissions

|                                      | Owner | Admin | User | Guest |
|--------------------------------------|-------|-------|------|-------|
| Manage plan and subscription         |   ✔   |       |      |       |
| Delete account                       |   ✔   |       |      |       |
| View invoice history                 |   ✔   |       |      |       |
| Update account info                  |   ✔   |   ✔   |      |       |
| Add/remove members                   |   ✔   |   ✔   |      |       |
| Update member roles                  |   ✔   |   ✔   |      |       |
| View account info                    |   ✔   |   ✔   |   ✔  |   ✔   |
|                                      |       |       |      |       |
| Create and delete Node-RED instances |   ✔   |       |      |       |
| Start and stop Node-RED instance     |   ✔   |   ✔   |      |       |
| Enable/disable public dashboard      |   ✔   |   ✔   |      |       |
| Install/remove nodes                 |   ✔   |   ✔   |      |       |
| View API key                         |   ✔   |   ✔   |   ✔  |       |
| View Node-RED instance console       |   ✔   |   ✔   |   ✔  |       |
| Use Node-RED editor to deploy flows  |   ✔   |   ✔   |   ✔  |       |
| Access dashboard at /api/ui          |   ✔   |   ✔   |   ✔  |   ✔   |
| Access flow api endpoints at /api/*  |   ✔   |   ✔   |   ✔  |   ✔   |