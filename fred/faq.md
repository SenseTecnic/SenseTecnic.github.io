---
layout: default
permalink: /fred/faq/
---
## FRED FAQ
Hopefully this answer's some of your questions about FRED. If you have any others, let us know. Note that FRED is a shared service and security in this alpha version is still simplistic: *take care to limit your use of passwords and other credentials in your flows.*

###Q. What's with the name?
FRED stands for a 'Front End for Node-RED'.

###Q. Neato, how does it work?
FRED is a "smart" proxy that relays HTTP and web sockets communications to one of many node-red instances that the system manages on our cloud instance. When you login, your user name and password or the generated API key in your profile is used to access your node red UI and your flows' HTTP input nodes.

###Q. Have you hacked Node-RED to make this work?
No, we use 'vanilla' Node-RED (with some very minor tweaks). We aim to make no changes to the node red core so that nodes and flows run without changes. When a new release of node red comes out, we can just upgrade to the new one.

###Q. Who are you guys?
We are Sense Tecnic, a commercial IoT solutions provider. We offer hosted IoT solutions using the Sense Tecnic IoT platform (known as WoTKit). We've been working with Node-RED for a while. We published a paper on Distributed Node-RED last year and use Node-RED for our own internal purposes. We've built FRED as a community (i.e FREE) service because we think its needed - and we like building cool stuff!

###Q. What's the relationship between FRED and WoTKit?
The Sense Tecnic IoT platform (aka WoTKit) is a commercial, hosted IoT platform that can be used for rapid IoT app/service development. (It's quite cool, check it out here). FRED is a community service that is self contained and independent of the WoTKit. While FRED includes nodes for connecting to the Sense Tecnic IoT platform (WoTKit) you don't need to use those and are free to use any other technology you want to. If there are specific nodes you'd like us to install, let us know.

###Q. What's Sense Tecnic's relationship to IBM and Node-RED?
We have no formal relationship with IBM. We are active members of the Node-RED community, but have developed FRED independently.

###Q. Do you guys offer a SLA or some sort of guarantees? How do I know my flows will keep running?
The free service is currently an alpha release and is best effort only.

###Q. Is FRED open source?
No, we haven't made FRED open source. That's something we might consider but at the moment our contribution to the NR open source community will be through proposals and updates to node-red.

###Q. Are you guys philanthropists or looking to make a quick buck?
We are providing FRED as a free service to the NR community. It would be great if we could cover our costs and make some money from the service at some point. However, at this stage we don't have a concrete plan for that.

###Q. Can I use it for commercial purposes?
Yes, feel free to use your account and the NR instances in anyway you want. However, it's alpha and we don't offer any guarantees that your flow will stay up 24x7. If you want that type of guarantee, please contact us.

###Q. Can I have unlimited flows or nodes running?
We don't restrict the volume and data in/out at this stage but we may have to if our costs get out of hand. If your flows misbehave, we may need to shut them down until we can work out what’s up. We may consider limits to the free version in the future.

###Q. I want to run node-red on a Pi (or some other device) - how does FRED help?
Todays service doesn't help you directly. The target for FRED is people who are using NR as a tool to integrate devices and web services in the cloud. We are also doing some work on a distributed node-red that may help with flows that run both in the cloud and on devices.

###Q. What are the technical limitations of FRED?
Broadly speaking, there are two. Firstly, FRED hosts Node-RED behind a proxy and firewall, so there is no way to communicate with your instance of node-red except through FRED. This means that only certain input nodes or configurations work (TODO: link to more info). Secondly, because FRED is a cloud service, you don’t have access to nodes that depend on underlying OS for storage and sensors. We plan to address some of these limitations in future releases.

###Q. What is your roadmap for FRED?
We have some ideas, but are open to suggestions. We hope to continue to support new versions and capabilities of node-red when they become available. We will be adding new nodes, and think that it would be good to bundle the system with libraries of flows and nodes. We are considering how to break open the functionality of the Sense Tecnic IoT platform so that we can offer other key components needed for IoT development.

###Q. How do I access HTTP input nodes using the API key?
To access a node-red HTTP Input node through FRED, you supply your login name and API key the appropriate headers. The headers used are:

    X-Auth-User: {username}
    X-Auth-Key: {apikey}

The API key is displayed in your Profile. You make HTTP requests to: `https://fred.sensetecnic.com/api`