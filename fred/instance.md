---
layout: page
permalink: /fred/instance
title: "FRED Docs: Instance"
---

# Your Node-RED Instance

- [How to access your instance](#how-to-access-your-instance)
- [Why did my instance stop?](#why-did-my-instance-stop)
- [Instance Limits](#instance-limits)

## How to access your instance

After [logging in](https://users.sensetecnic.com/login?return=https://fred.sensetecnic.com) to FRED, you will be redirected to the FRED dashboard. You will be able to manage your Node-RED instance from here.

The sidebar contains everything you need to manage your FRED instance. Your instance can be started by clicking the green "Start Instance" button either on the sidebar or on the right hand side.

The console output of your instance can be accessed by clicking the "console" button in the sidebar. This can be used to debug any problems with your instance.

[![example input](/assets/images/fred-dash.png)](/assets/images/fred-dash.png)

## Why did my instance stop?

Occasionally, your Node-RED instance may be stopped or restarted without any warning. This can be due to a variety of reasons including but not limited to: 

- A bad node configuration in your flows causing your instance to crash. 
- A bug in one of the nodes in your flow, especially common for function nodes.
- You've gone above your instance [limits](#limits).
- Your instance is taking up too much memory and/or other system resources.
- We stopped it manually for maintenance or to deploy a new version of FRED (we will attempt restart your instance when our job is complete, this is rare usually takes less than 30 minutes).

### Debugging and possible solutions to crashed instances:

- View the console output and find out if and which node is causing the crash and fix it or remove the node.
- Make sure any function nodes used are not throwing errors.
- Wait awhile and try to start your instance again.
- If the methods above do not work or is unavailable, [contact us](mailto:info@sensetecnic.com).

## Instance Limits

In addition to the limits below, all instances are also given a limit on the amount of system resources that they can consume.

### Free Tier - FRED Short

Our free tier comes with several restrictions: 

- Your instance will automatically be stopped after **3 days** if it is not accessed. However your account and flows will not be changed or removed. Every time you log into FRED, this timer will be reset. 

- You may only have a maximum of **50 nodes** running in your flows. This number is displayed on the sidebar by the "Node Count" field. If you exceed this node count you will have some time to remove nodes from your instance before it is turned automatically stopped. Comment nodes are exempt from this count. 

- You will not be able to enable public access to your Node-RED UI dashboard.

### Subscription - FRED Tall

If you are subscribed to your [FRED Tall](https://fred.sensetecnic.com/pricing) plan, will you have the following benefits:

- Your instance will **not be turned off** after 3 days. 

- The amount of nodes you have have running in your flows is doubled to **100**. 

- You have the option to **enable public access to your Node-RED UI dashboard page** through your FRED dashboard. This allows others to view your Node-RED dashboard page (https://fred.sensetecnic.com/public/\<YOUR_USERNAME\>/ui/) without logging into your FRED account.

### Other Plans

Please [contact us](mailto:info@sensetecnic.com) if you have use cases with special requirements or if you have any other questions.


