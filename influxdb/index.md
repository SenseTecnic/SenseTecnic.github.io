---
layout: page
permalink: /influxdb/
title: "InfluxDB Docs: Introduction"
---

# Introduction

The STS-InfluxDB service provides FRED users with a shared [InfluxDB database](https://docs.influxdata.com/influxdb) service for their Node-RED flows. In addition to basic InfluxDB time series data storage, the service allows users to manage database, users and privileges through its easy to use web management interface.

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

