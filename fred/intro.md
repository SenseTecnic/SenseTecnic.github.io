---
layout: page
permalink: /fred/intro
title: intro
---

# What is FRED?

Front End for Node-RED (FRED) manages instances of [Node-RED](https://nodered.org) for multiple users in the cloud. To instantly create your own Node-RED instance, [register for a free (limited) account](https://users.sensetecnic.com/register), or check out our [pricing](https://fred.sensetecnic.com/pricing) for hosting your instance of Node-RED.

This guide will help you get started with using FRED.  To learn more about Node-RED itself see the official [Node-RED documentation](http://nodered.org).

For more information and details, please refer to the [faq section](/fred/faq).

## Node-RED in FRED

[Node-RED](https://nodered.org) is a visual tool for wiring the Internet of Things developed by [IBM Emerging Technology](https://www.ibm.com/blogs/emerging-technology) and the open source community. With Node-RED you can wire up input, output and processing nodes to create flows to prototype IoT applications.

The current current version of [Node-RED](https://nodered.org) used by FRED is based on `0.15.3`.

___

# Table of Contents

{% for category in site.sidebar %}
**{{category.text}}**
{% for p in category.pages %}
- [{{p.text}}]({{p.url}})
{% endfor %}
{% endfor %}