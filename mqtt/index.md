---
layout: page
permalink: /mqtt/
title: "MQTT Docs: Introduction"
---

# Introduction

The STS-MQTT service provides FRED users with an MQTT broker for their flows.  In addition to basic publish and subscribe functionality, the STS MQTT service allows users to manage client connections, tracked topics, and create public data feeds.

# Getting Started

This guide will help you get up and running with the STS MQTT service using FRED and the MQTT nodes in just a few minutes.

{% for c in site.data.toc[1].chapters %}
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}
{% endfor %}

# Using STS MQTT

- Clients, Topics and Access Control
- Managing clients and keys
- Public and private topics
- Topic Patterns
- Real time statistics
- Information and Error Messages
