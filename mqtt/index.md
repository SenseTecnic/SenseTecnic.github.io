---
layout: page
permalink: /mqtt/
title: "MQTT Docs: Introduction"
---

# Introduction

The STS-MQTT service provides FRED users with an MQTT broker for their flows.  In addition to basic publish and subscribe
functionality, the STS MQTT service allows users to manage client connections, tracked topics, and create public data feeds.

For more information and details, please refer to the [FAQ section](/mqtt/faq) or take a look at the documentation below.

# Getting Started

This guide will help you get up and running with the STS MQTT service using FRED and the MQTT nodes in just a few minutes.


{% assign c = site.data.toc[1].chapters[0] %}
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}

# Using STS MQTT

{% assign c = site.data.toc[1].chapters[1] %}
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}

