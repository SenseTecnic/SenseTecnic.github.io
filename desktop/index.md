---
layout: page
permalink: /desktop/
title: "FRED Desktop: Intro"
---
# Introduction

FRED Desktop bundles Node-RED with additional features for ease of use, setup and configuration, and full support from [Sense Tecnic Systems](http://sensetecnic.com) for desktop operating systems - Windows, Mac OS and Ubuntu.  For more information on the Node-RED system see [the documentation](https://nodered.org/docs).  Sense Tecnic also provides [the Node-RED Guide](http://noderedguide.com/) and a number of Node-RED tutorials on the [developer site](https://developers.sensetecnic.com).

## Why FRED Desktop?

Normally, to install Node-RED on a desktop OS you will need to install Node.js, and then install and configure Node-RED on the command line.  Using the FRED Desktop, you simply install the desktop application and double click on the icon to get started with Node-RED.  FRED Desktop comes bundled with additional nodes and functionality to view dashboards, automatically create flows using the cookbook, and view flow status.

## Feedback

The FRED Desktop is currently pre-release for testing and feedback.  Please let us know the FRED Version number when you report feedback and bug reports by sending an email to [info@sensetecnic.com](mailto:info@sensetecic.com).

Information on the current roadmap for the FRED Desktop [is maintained here](/desktop/roadmap).

Next: [Quick Start](quickstart)

___

# Table of Contents

{% for c in site.data.toc[3].chapters %}
**{{c.text}}**
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}
{% endfor %}
