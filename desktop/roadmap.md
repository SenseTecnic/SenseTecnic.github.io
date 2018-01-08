---
layout: page
permalink: /desktop/roadmap/
title: Roadmap
---
# Roadmap

Currently on the roadmap:

* **Additional Support for Automation Protocols** In addition to OPC UA will improve and bundle additional protocol nodes for supporting industrial gateways such as OSIsoft, Kepware and protocols such as modbus and other PLC protocols.  Please let us know what protocols and industrial controllers you would like to see.

* **Improved Recipes.** Current recipes are a proof of concept.  We aim to add more substantial recipes, provide recipe categories, and provide more information and tools to make it easier to generate common flows automatically.

* **Integration with FRED Cloud** The product will be more integrated with FRED cloud allowing you to more easily distribute flow logic between FRED Desktop and FRED Cloud services.

* **UI and Settings Improvements**  The UI will be improved to support multiple windows, offline access to documentation and other features.  Add additional Node-RED settings controls.  Feedback is welcome.

* **Longer term ideas**
  * support multi-process Node-RED runtime for improved performance.
  * Node-RED runtime monitoring - send alerts external system if NR runtime goes down or external connectivity lost.
  * Integration with centralized flow management system.

## Known issues

* Console output is lost when reloading the UI window and does not persist.
* OPC UA browse performance issues.
* Documentation tab requires connectivity.
* After installing a recipe, editor requires a 'merge' to sync up with installed flow.
* persisting MQTT Db input messages can corrupt data

## Feedback

If you have any feedback on FRED Desktop or this documentation, [please send us feedback](mailto:info@sensetecnic.com).

Next: [Release Notes](/desktop/release)