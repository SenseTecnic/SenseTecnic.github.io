---
layout: page
permalink: /fred/dashboard-sharing/
title: dashboard-sharing
---

# Sharing your Node-RED Dashboard

___

**FRED v1.0 UPDATE**

HTTP endpoint proxy has been changed in FRED v1.0. The base URL for accessing a user's instance has been changed to `https://{username}.fred.sensetecnic.com`. Please update any clients connecting to a FRED instance with the new URL scheme as the old URL path will be deprecated and removed.

___


If you are subscribed to the [FRED Tall](https://users.sensetecnic.com/subscriptions?return=https://fred.sensetecnic.com) plan, you can enable public access to your Node-RED UI dashboard.

To do so, simply:

1. Log in to your FRED instance.

2. Make sure the instance is started, node-red-dashboard node is installed and used in your flow.

3. Click the "Enable Public Dashboard" check box on the sidebar.

4. Your dashboard can now be accessed at `https://{username}.fred.sensetecnic.com/api/ui` without logging in to your FRED instance.

5. To disable sharing, simply uncheck the checkbox.