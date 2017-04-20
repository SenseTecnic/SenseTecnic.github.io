---
layout: page
permalink: /influxdb/
title: "InfluxDB Docs: Introduction"
---

# Introduction

The STS-InfluxDB service provides FRED users with an InfluxDB database server for their flows. In addition to the basic InfluxDB data storage
functionality, the STS InfluxDB service allows users to manage database, users and previlleges through the web interface tools.

For more information and details, please refer to the [FAQ section](/influxdb/faq) or take a look at the documentation below.

# Getting Started

This guide will help you get up and running with the STS InfluxDB service using FRED and the InfluxDB nodes in just a few minutes.


{% assign c = site.data.toc[2].chapters[0] %}
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}

# Using STS InfluxDB

{% assign c = site.data.toc[2].chapters[1] %}
{% for p in c.pages %}
- [{{p.text}}]({{p.url}}){% endfor %}
