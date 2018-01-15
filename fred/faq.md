---
layout: page
permalink: /fred/faq/
title: "FRED Docs: FAQ"
---
# FAQ

Hopefully this answer's some of your questions about FRED. If you have any others, [let us know](mailto:info@sensetecnic.com).
Note that FRED is a shared service: *take care to limit your use of passwords and other credentials in your flows.*

- [What's with the name?](#q-whats-with-the-name)
- [Neato, how does it work?](#q-neato-how-does-it-work)
- [Have you hacked Node-RED?](#q-have-you-hacked-node-red)
- [Who are you guys?](#q-who-are-you-guys)
- [What's Sense Tecnic's relationship to IBM and Node-RED?](#q-whats-sense-tecnics-relationship-to-ibm-and-node-red)
- [What's the difference between paid and free accounts?](#q-paid-and-free-accounts)
- [What's the MQTT service?](#q-whats-the-MQTT-service)
- [What do I get for free?](#q-what-do-i-get-for-free)
- [How can I ensure my flows will keep running?](#q-how-can-i-ensure-my-flows-will-keep-running)
- [How does the node count limit work?](#q-how-does-the-node-count-limit-work)
- [I am paying for a subscription but my Node-RED instance keeps turning off!](#q-i-am-paying-for-a-subscription-but-my-node-red-instance-keeps-turning-off)
- [Is FRED open source?](#q-is-fred-open-source)
- [Are you guys philanthropists or looking to make a quick buck?](#q-are-you-guys-philanthropists-or-looking-to-make-a-quick-buck)
- [Can I use it for commercial purposes?](#q-can-i-use-it-for-commercial-purposes)
- [Can I have unlimited flows or nodes running?](#q-can-i-have-unlimited-flows-or-nodes-running)
- [I want to run Node-RED on a Pi (or some other device) - how does FRED help?](#q-i-want-to-run-node-red-on-a-pi-or-some-other-device---how-does-fred-help)
- [What are the technical limitations of FRED?](#q-what-are-the-technical-limitations-of-fred)
- [What is your roadmap for FRED?](#q-what-is-your-roadmap-for-fred)
- [How do I access HTTP or web sockets input nodes with FRED?](#q-how-do-i-access-http-or-web-sockets-input-nodes-with-fred)
- [How do I install custom nodes for my instance?](#q-how-do-i-install-custom-nodes-for-my-instance)
- [Does FRED use Docker?](#q-does-fred-use-docker)

___

### Q. What's with the name?
FRED stands for a 'Front End for Node-RED'.

___

### Q. Neato, how does it work?
FRED is managed multi-tenant cloud service that manages Node-RED instances on behalf of users. Each instance relieas on a "smart" proxy that relays HTTP and web sockets communications to one of many Node-RED instances that the system manages on our cloud instance. When you login, your user name and password or the generated API key in your profile is used to access your node red UI and your flows' HTTP input nodes. A technical paper is available [here](http://sensetecnic.com/how-fred-cloud-node-red-works/)

___

### Q. Have you hacked Node-RED?
No, we use 'vanilla' Node-RED (with some very minor visual tweaks). We aim to make no changes to the Node-RED core so that nodes and flows run without changes or compatibility issues. When a new release of Node-RED comes out, we can just upgrade to the new one.

___

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We've been working with Node-RED since it's initial release. We've contributed to the core Node-RED source, have built and contributed a number of new nodes and have written many lectures and tutorials for the community. We've built FRED as a service because we think its needed - and we like building cool stuff!

___

### Q. What's Sense Tecnic's relationship to IBM and Node-RED?
We have no formal relationship with IBM. We are active members of the Node-RED community, but have developed FRED independently.

___

### Q. What's the difference between paid and free accounts?
The free account is a great way to try out FRED, ie cloud Node-RED, but it's limited by resources and will only run for 24h after you log out. Paid accounts are for users who need a real service which runs 24X7, has support and has much higher resource limits. The paid accounts also have access to an integrated MQTT service that makes it super easy to build IoT apps. 

___

### Q. What's the MQTT service?
Paid accounts get a bundled MQTT service that makes it easy to built IoT apps that rely on field deployed devices sending data over MQTT. Our MQTT service is built into FRED and highly integrated. In addition, we've developed a management interface for MQTT that makes it easy to create connections, monitor them, manage your topics etc. More details [here](http://docs.sensetecnic.com/mqtt/faq/)

___

### Q. What do I get for free?
The free account is a fully functioning node-RED instance that you can use to build and run Node-RED flows on our cloud server. It has three main restriction. Firstly, there is a max limit (50) on the number of nodes you can use in your flows. When you hit that restriction your Node-RED instance will be stopped after a period of time and you'll be asked to remove some nodes. Secondly, once deployed, your flows will run in our server for 24h. If you log in to FRED again during those 24h your timer is restarted. If you don't log in, your flows will be stopped to conserve server resources. All you have to do is login again and they will be restarted for another 24h. There are currently no restrictions on data in/out.  Support is best effort by email. Lastly, you don't get access to our integrated MQTT service - that's only available for paying users.

___

### Q. How can I ensure my flows will keep running?
To ensure your nodes keep running, you can upgrade to our paid subscription plans.  Paid plans has a higher node limit, improved support and we'll keep your flows running. They also include an MQTT service.  See the [pricing page](https://fred.sensetecnic.com/pricing).  We also offer dedicated instances of Node-RED and customization services.  Please [contact us](mailto:info@sensetecnic.com) for more information.

___

### Q. How does the node count limit work?
We count nodes in your flows that appear on the canvas/workspace, other than tabs and comment nodes.  We check the node count against your limits when you first log in, and then periodically.  If you go over your node count limit, we let you know when you log in or by email, and give you 1 hour to remove nodes and redeploy before the instance is stopped.  Even after the instance is stopped, you can log in any time, start the instance, remove nodes and redeploy, or upgrade your subscription and start the instance.  We count all nodes in all tabs *including configuration nodes* which do not appear in the workspace.  We do not include comment nodes.

___

### Q. I am paying for a subscription but my Node-RED instance keeps turning off!
It is likely that a bug in your flow is causing your instance to crash repeatedly. Our system automatically restarts your instance once after the first crash but does not attempt to restart it again if it crashes again within 5 minutes. Usually crashes are due to a bad node input or errors thrown in the function node. Occasionally, crashes are due to instances hitting their memory limit of 300mb. Most of the times this is due to a memory leaks within the flows. You can check the console output to make sure no errors are thrown or contact us.

___

### Q. Is FRED open source?
No, we haven't made FRED open source. That's something we might consider but at the moment our contribution to the NR open source community is through contributions to the Node-RED core code, new nodes we develop and open souyrce and through engagement and contribution to the community. Part of our motivation for making sure we have a free tier on FRED is to help grow the Node-RED community.

___

### Q. Are you guys philanthropists or looking to make a quick buck?
We are providing FRED as a service to the Node-RED community.  Initially FRED was free, but we've found it necessary to cover the costs of running *many* Node-RED instances in the cloud, so we're introducing paid subscriptions for those that need their instance to run 24x7, want less resource restrictions and a built in MQTT service. We think Node-RED is very powerful and we aim to build our business out of making it easy for companies and developers to use it for their projects. However, we continue to offer a free service to the community for those who just want to check out Node-RED, or run a few simple flows for their own use.

___

### Q. Can I have unlimited flows or nodes running?
Paid tiers have high resource limits and we don't restrict message flows. The free tier has enough resources to try out the service, but you'll want to upgrade for anything serious. In all cases, we monitor the system and if your flows misbehave, we may need to shut them down until we can work out what’s up.

___

### Q. I want to run Node-RED on a Pi (or some other device) - how does FRED help?
Todays service doesn't help you directly. The target for FRED is people who are using NR as a tool to integrate devices and web services in the cloud. We are also doing some work on a distributed Node-RED that may help with flows that run both in the cloud and on devices.

___

### Q. What are the technical limitations of FRED?
Broadly speaking, there are two. Firstly, FRED hosts Node-RED behind a proxy and firewall, so there is no way to communicate with your instance of Node-RED except through FRED. This means that only certain input nodes or configurations work. Secondly, because FRED is a cloud service, you don’t have access to nodes that depend on underlying OS for storage and sensors. Depending on your subscription and associated time and node count limits, instances may stop running after a period of time.  

___

### Q. What is your roadmap for FRED?
Our goal is to make FRED the easiest IoT development environment for those looking for a "develop and deploy" service in the cloud. We continue to track Node-RED releases and update the FRED service as they become available. We have added MQTT support to FRED and are working on other microservices that are useful to our users. We have some other ideas, but are open to suggestions.

___

### Q. How do I access HTTP or web sockets input nodes with FRED?
See the [http access](/fred/http-access) and [websocket support](/fred/websocket-access) for more information on how to access public and private input nodes.

___

### Q. How do I install custom nodes for my instance?
We don't allow you to install arbitrary nodes on FRED. Because fred is a shared service, we have to validate and test any nodes that run on FRED. However, we do provide an extensive set of nodes that we curate - all tested (fixed where needed), and checked to make sure they don't break the service for other users.  We install a small default set of nodes, and allow you to install new nodes from our large and growing catalogue. See [Installing Node Packages for your Instance](/fred/node-install)

___

### Q. Does FRED use Docker?
Yes. FRED uses [Docker](https://www.docker.com/) to contain its individual Node-RED instances.

___
