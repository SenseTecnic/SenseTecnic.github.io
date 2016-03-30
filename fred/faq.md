---
layout: default
permalink: /fred/faq/
---
## FRED FAQ
Hopefully this answer's some of your questions about FRED. If you have any others, let us know. Note that FRED is a shared service and security in this alpha version is still simplistic: *take care to limit your use of passwords and other credentials in your flows.*

### Q. What's with the name?
FRED stands for a 'Front End for Node-RED'.

### Q. Neato, how does it work?
FRED is a "smart" proxy that relays HTTP and web sockets communications to one of many Node-RED instances that the system manages on our cloud instance. When you login, your user name and password or the generated API key in your profile is used to access your node red UI and your flows' HTTP input nodes.

### Q. Have you hacked Node-RED?
No, we use 'vanilla' Node-RED (with some very minor tweaks). We aim to make no changes to the node red core so that nodes and flows run without changes. When a new release of node red comes out, we can just upgrade to the new one.

### Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We offer hosted IoT solutions using the Sense Tecnic IoT platform (known as WoTKit). We've been working with Node-RED for a while and have published a paper on Distributed Node-RED last year and use Node-RED for our own internal purposes. We've built FRED as a service because we think its needed - and we like building cool stuff!

### Q. What's Sense Tecnic's relationship to IBM and Node-RED?
We have no formal relationship with IBM. We are active members of the Node-RED community, but have developed FRED independently.

### Q. What do I get for free?
The free service is currently an beta release and is best effort only.  Free instances run for 72 hours after a log in.  In the future, we are considering a limit of 50 nodes in all flows/tabs.  Support is best effor by email.

### Q. Do you guys offer a SLA or some sort of guarantees? How can I ensure my flows will keep running?
We are working on paid subscription options where your flows will keep running, higher node counts, improved support, and no time limits.  We also offer dedicated instances of Node-RED and customization services.  Please contact us for more information.

### Q. How does the node count limit work?
We count nodes in your flows that appear on the canvas/workspace, other than tabs and comment nodes.  We check the node count against your limits when you first log in, and then periodically.  If you go over your node count limit, we give you 24 hours to remove nodes and redeploy before the instance is stopped.  Even after the instance is stopped, you can log in any time, start the instance, remove nodes and redeploy, or upgrade your subscription and start the instance.

### Q. Is FRED open source?
No, we haven't made FRED open source. That's something we might consider but at the moment our contribution to the NR open source community will be through proposals and updates to Node-RED.

### Q. Are you guys philanthropists or looking to make a quick buck?
We are providing FRED as a service to the Node-RED community.  Initially FRED was free, but we've found it necessary to cover the costs of running *many* Node-RED instances in the cloud, so we're introducing paid subscriptions for those that need their instance to run 24x7.

### Q. Can I use it for commercial purposes?
Yes, feel free to use your account and the NR instances in anyway you want. However, keep in mind that we only run your instance for 72 hours with the free account, and don't offer any guarantees that your flow will stay up. If you want that type of guarantee, please contact us or consider a paid subscription when that is ready.

### Q. Can I have unlimited flows or nodes running?
We don't restrict the volume and data in/out at this stage but we may have to if our costs get out of hand. If your flows misbehave, we may need to shut them down until we can work out what’s up.

### Q. I want to run Node-RED on a Pi (or some other device) - how does FRED help?
Todays service doesn't help you directly. The target for FRED is people who are using NR as a tool to integrate devices and web services in the cloud. We are also doing some work on a distributed Node-RED that may help with flows that run both in the cloud and on devices.

### Q. What are the technical limitations of FRED?
Broadly speaking, there are two. Firstly, FRED hosts Node-RED behind a proxy and firewall, so there is no way to communicate with your instance of Node-RED except through FRED. This means that only certain input nodes or configurations work. Secondly, because FRED is a cloud service, you don’t have access to nodes that depend on underlying OS for storage and sensors.  We currently don't allow you to install your own nodes yet. We plan to address some of these limitations in future releases.  Depending on your subscription and associated time and node count limits, instances may stop running after a period of time.  

### Q. What is your roadmap for FRED?
We have some ideas, but are open to suggestions. We hope to continue to support new versions and capabilities of Node-RED when they become available. We will be adding new nodes, and think that it would be good to bundle the system with libraries of flows and nodes. We are considering how to break open the functionality of the Sense Tecnic IoT platform so that we can offer other key components needed for IoT development.

### Q. How do I access HTTP or web sockets input nodes with FRED?
See the [user documentation](/fred/userdocs) for more information on how to access public and private input nodes.