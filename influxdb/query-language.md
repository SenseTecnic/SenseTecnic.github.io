---
layout: page
permalink: /influxdb/query-language/
title: "InfluxDB Docs: Query Language"
---

# Query Language

STS-InfluxDB service is a shared InfluxDB service; standard InfluxDB queries work on the STS-InfluxDB service.

For more infomation on the InfluxDB query language, you can visit the [official InfluxDB Query Language documentation](https://docs.influxdata.com/influxdb/v1.2/query_language/){:target="_blank"}. 

For more information on the query tool, please refer to ["Use the web query tool"](/influxdb/query-tool/) or contact us [by email](mailto:info@sensetecnic.com). 

Please note that the current query language tool only supports querying data. That is, you can use the basic data query phrase like:

- `SELECT` statement
- `GROUP BY` clauses
- `INTO` clauses
- `WHERE` clauses  

You can also use the `SHOW` command to show a list of 

- DATABASES
- MEASUREMENTS
- FIELD KEYS
- TAG KEYS

You can also use functions and Mathematical Operators in the query:

* Aggregations
  * COUNT()
  * DISTINCT()
  * INTEGRAL()
  * MEAN()
  * MEDIAN()
  * MODE()
  * SPREAD()
  * STDDEV()
  * SUM()
  * Selectors
  * BOTTOM()
  * FIRST()
  * LAST()
  * MAX()
  * MIN()
  * PERCENTILE()
  * SAMPLE()
  * TOP()

* Transformations
  * CEILING()
  * CUMULATIVE_SUM()
  * DERIVATIVE()
  * DIFFERENCE()
  * ELAPSED()
  * FLOOR()
  * HISTOGRAM()
  * MOVING_AVERAGE()
  * NON_NEGATIVE_DERIVATIVE()

* Predictors
  * HOLT_WINTERS()

However, the following query command are not supported on STS-InfluxDB query tool:
* `CREATE`
* `DROP`
* `ALTER`
* Modify DATABASES
* Modify Users 
* Modify retention plans 



