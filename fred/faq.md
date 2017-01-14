---
layout: page
permalink: /fred/faq
title: "FRED Docs: FAQ"
---
# FAQ
Hopefully this answer's some of your questions about FRED. If you have any others, [let us know](mailto:info@sensetecnic.com). Note that FRED is a shared service and security in this alpha version is still simplistic: *take care to limit your use of passwords and other credentials in your flows.*

- [What's with the name?](#q-whats-with-the-name)
- [Neato, how does it work?](#q-neato-how-does-it-work)
- [ave you hacked Node-RED?](#q-have-you-hacked-node-red)
- [Who are you guys?](#q-who-are-you-guys)
- [What's Sense Tecnic's relationship to IBM and Node-RED?](#q-whats-sense-tecnics-relationship-to-ibm-and-node-red)
- [What do I get for free?](#q-what-do-i-get-for-free)
- [How can I ensure my flows will keep running?](#q-how-can-i-ensure-my-flows-will-keep-running)
- [How does the node count limit work?](#q-how-does-the-node-count-limit-work)
- [Is FRED open source?](#q-is-fred-open-source)
- [Are you guys philanthropists or looking to make a quick buck?](#q-are-you-guys-philanthropists-or-looking-to-make-a-quick-buck)
- [Can I use it for commercial purposes?](#q-can-i-use-it-for-commercial-purposes)
- [Can I have unlimited flows or nodes running?](#q-can-i-have-unlimited-flows-or-nodes-running)
- [I want to run Node-RED on a Pi (or some other device) - how does FRED help?](#q-i-want-to-run-node-red-on-a-pi-or-some-other-device---how-does-fred-help)
- [What are the technical limitations of FRED?](#q-what-are-the-technical-limitations-of-fred)
- [What is your roadmap for FRED?](#q-what-is-your-roadmap-for-fred)
- [How do I access HTTP or web sockets input nodes with FRED?](#q-how-do-i-access-http-or-web-sockets-input-nodes-with-fred)
- [How do I install custom nodes for my instance?](#q-how-do-i-install-custom-nodes-for-my-instance)
- [Does FRED use Docker?](q-does-fred-use-docker)
___

### Q. What's with the name?
FRED stands for a 'Front End for Node-RED'.

___

### Q. Neato, how does it work?
FRED is a "smart" proxy that relays HTTP and web sockets communications to one of many Node-RED instances that the system manages on our cloud instance. When you login, your user name and password or the generated API key in your profile is used to access your node red UI and your flows' HTTP input nodes.

___

### Q. Have you hacked Node-RED?
No, we use 'vanilla' Node-RED (with some very minor visual tweaks). We aim to make no changes to the Node-RED core so that nodes and flows run without changes or compatibility issues. When a new release of Node-RED comes out, we can just upgrade to the new one.

___

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We offer hosted IoT solutions using the Sense Tecnic IoT platform (known as WoTKit). We've been working with Node-RED for a while and have published a paper on Distributed Node-RED last year and use Node-RED for our own internal purposes. We've built FRED as a service because we think its needed - and we like building cool stuff!

___

### Q. What's Sense Tecnic's relationship to IBM and Node-RED?
We have no formal relationship with IBM. We are active members of the Node-RED community, but have developed FRED independently.

___

### Q. What do I get for free?
The free account has a restriction on the number of nodes you are able to have in all of your flows. When you hit that restriction your Node-RED instance will be stopped after a period of time and you'll be asked to remove some nodes. There are currently no restrictions on data in/out.  Support will be best effort by email.

___

### Q. How can I ensure my flows will keep running?
To ensure your nodes keep running, you can now upgrade to our paid subscription plan.  This plan has a higher node limit, improved support and we'll keep your flows running.  See the [pricing page](https://fred.sensetecnic.com/pricing).  We also offer dedicated instances of Node-RED and customization services.  Please [contact us](mailto:info@sensetecnic.com) for more information.

___

### Q. How does the node count limit work?
We count nodes in your flows that appear on the canvas/workspace, other than tabs and comment nodes.  We check the node count against your limits when you first log in, and then periodically.  If you go over your node count limit, we let you know when you log in or by email, and give you 24 hours to remove nodes and redeploy before the instance is stopped.  Even after the instance is stopped, you can log in any time, start the instance, remove nodes and redeploy, or upgrade your subscription and start the instance.  We count all nodes in all tabs *including configuration nodes* which do not appear in the workspace.  We do not include comment nodes.

___

### Q. Is FRED open source?
No, we haven't made FRED open source. That's something we might consider but at the moment our contribution to the NR open source community will be through proposals and updates to Node-RED.

___

### Q. Are you guys philanthropists or looking to make a quick buck?
We are providing FRED as a service to the Node-RED community.  Initially FRED was free, but we've found it necessary to cover the costs of running *many* Node-RED instances in the cloud, so we're introducing paid subscriptions for those that need their instance to run 24x7.

___

### Q. Can I use it for commercial purposes?
Yes, feel free to use your account and the NR instances in anyway you want. However, keep in mind that we only run your instance for 72 hours with the free account, and don't offer any guarantees that your flow will stay up. If you want that type of guarantee, please [contact us](mailto:info@sensetecnic.com) or consider a paid subscription when that is ready.

___

### Q. Can I have unlimited flows or nodes running?
We don't restrict the volume and data in/out at this stage but we may have to if our costs get out of hand. If your flows misbehave, we may need to shut them down until we can work out what’s up.

___

### Q. I want to run Node-RED on a Pi (or some other device) - how does FRED help?
Todays service doesn't help you directly. The target for FRED is people who are using NR as a tool to integrate devices and web services in the cloud. We are also doing some work on a distributed Node-RED that may help with flows that run both in the cloud and on devices.

___

### Q. What are the technical limitations of FRED?
Broadly speaking, there are two. Firstly, FRED hosts Node-RED behind a proxy and firewall, so there is no way to communicate with your instance of Node-RED except through FRED. This means that only certain input nodes or configurations work. Secondly, because FRED is a cloud service, you don’t have access to nodes that depend on underlying OS for storage and sensors.  We currently don't allow you to install your own nodes. We plan to address some of these limitations in future releases.  Depending on your subscription and associated time and node count limits, instances may stop running after a period of time.  

___

### Q. What is your roadmap for FRED?
We have some ideas, but are open to suggestions. We hope to continue to support new versions and capabilities of Node-RED when they become available. We will be adding new nodes, and think that it would be good to bundle the system with libraries of flows and nodes. We are considering how to break open the functionality of the Sense Tecnic IoT platform so that we can offer other key components needed for IoT development.

___

### Q. How do I access HTTP or web sockets input nodes with FRED?
See the [user documentation](/fred/userdocs) for more information on how to access public and private input nodes.

___

### Q. How do I install custom nodes for my instance?
See [Installing Node Packages for your Instance](/fred/node-install)

___

### Q. Does FRED use Docker?
Yes. FRED uses [Docker](https://www.docker.com/) to contain its individual Node-RED instances.

___