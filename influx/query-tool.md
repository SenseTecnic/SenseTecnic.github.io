---
layout: page
permalink: /influx/query-tool/
title: "InfluxDB Docs: Use the Web Query Tool"
---

# Use the Web Query Tool

The web query tool is a quick way to query data stored in the InfluxDb database. Simply click the Query Tool tab on the sidebar to bring up the Database Query Tool page. 

![influx_query_tool.png](/assets/images/influx_query_tool.png)

You can select which database to use in the dropdown menu. In this example we will select "USE: testrobot1_testdb".  

You can type in your query in the text field and click "Execute" when you finish. The Query Results tab will show you the result from your query. You can refer to the [InfluxDB Query Language Documentation](https://docs.influxdata.com/influxdb/v1.2/query_language/) to see your available query options.

For example, we had previously run the sample flow from [node-red-contrib-influxdb](https://www.npmjs.com/package/node-red-contrib-influxdb) where there are three field values(numValue, randomValue, strValue) and two tags("sensor1" and "device2"). Let's say we want to query all data where the randomValue is below 5, we would enter in the query field with:

```
select * from test where randomValue < 5
```

and we should get a list of data where the randomValue is less than 5.

![influx_query_tool_result.png](/assets/images/influx_query_tool_result.png)

Now you know the basic functions of the STS-InfluxDB platform and you are ready to go!

[Home >>](/influx/)
