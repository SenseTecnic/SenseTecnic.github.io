---
layout: default
permalink: /fred/releases/
---
## Releases

###Release 0.1.1

Date: Feb. 28, 2015

- updated Node-RED to 0.10.3
- UI bug fixes
- remove nodes that can't be used in fred using nodeExcludes features
- instance startup waits until sees 'starting flows'.
- use NR user awareness in 0.10.x in UI to show current user, added logout and back to FRED
- additional integration and unit tests
- refactored modules for easier testing
- added wotkit OAuth2 sign on and auto registration as an option (not used in community version)
- now logged in after successful registration email validation
- added node PID and port to admin UI
- tries to restart NR instance before giving up.

###Release 0.1.0

Date: Feb. 2, 2015

Initial Release of FRED.