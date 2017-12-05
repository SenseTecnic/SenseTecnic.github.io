---
layout: page
permalink: /desktop/roadmap/
title: Roadmap
---
# Roadmap

Currently on the roadmap:

* **Additional Support for Automation Protocols** In addition to OPC UA will improve and bundle additional protocol nodes for supporting industrial gateways such as OSIsoft, Kepware and protocols such as modbus and other PLC protocols.  Please let us know what protocols and industrial controllers you would like to see.

* **Improved Recipes.** Current recipes are a proof of concept.  We aim to add more substantial recipes, provide recipe categories, and provide more information and tools to make it easier to generate common flows automatically.

* **Connections**  We anticipate adding information to the Connections page to indicate the overall health of the flow.  This will include information such as how long the system has been running, how long connections have been up or down, and other
statistics related to the flow and outside connectivity.  The aim is to provide more real time information on the overall health of the flow at a glance than the current Node-RED editor provides using status and debug nodes.

* **Integration with FRED Cloud** The product will be more integrated with FRED cloud allowing you to more easily distribute flow logic between FRED Desktop and FRED Cloud services.

* **UI and Settings Improvements**  The UI will be improved to support multiple windows, offline access to documentation and other features.  Add additional Node-RED settings controls.  Feedback is welcome.

* **Longer term ideas**
  * support multi-process Node-RED runtime for improved performance.
  * Node-RED runtime monitoring - send alerts external system if NR runtime goes down or external connectivity lost.
  * Integration with centralized flow management system.

## Known issues

* Connections tab is not updated in real time.
* Console output is lost when reloading the UI window and does not persist.
* OPC UA performance issues.
* Documentation tab requires connectivity. Links in documentation do not open a browser window.
* Add license information.
* Add software license checks.

## Feedback

If you have any feedback on FRED Desktop or this documentation, [please send us feedback](mailto:info@sensetecnic.com).

Next: [Release Notes](/desktop/release)