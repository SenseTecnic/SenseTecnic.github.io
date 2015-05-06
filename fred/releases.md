---
layout: default
permalink: /fred/releases/
---
## Releases

###Release 0.1.4
May 6, 2015

- upgrade node-red-node-web-nodes to v0.3.2 to fix OAuth dance with instagram, google calendar node and others.
- fixed crashing pushbullet by upgrading to node-red-node-pushbullet v0.0.5.  Thank you @knolleary for these fixes!
- upgraded wotkit nodes to 0.2.1.  Now supports actuation.  Thanks @calderonroberto.
- new fancier front page ala @calderonroberto.
- new admin features to help us manage our users' instances.  Thanks @tedh for UI help.
- front page asks user to start their instance if it is not running on login.
- support public HTTP input nodes to allow users to build simple web sites/pages - thanks @borisadryan for the idea.

###Release 0.1.3
April 1, 2015

- updated to use Node RED 0.10.6

###Release 0.1.2
- Node RED is now a submodule of FRED, not the other way around

###Release 0.1.1
March 6, 2015

- UI bug fixes
- remove nodes that can't be used in fred using nodeExcludes features
- instance startup waits until sees 'starting flows' before starting.
- newer version of Node RED - 0.10.3
- use NR user awareness in UI to show current user, added logout and back to FRED
- additional integration and unit tests
- refactored modules for easier testing
- added wotkit OAuth2 sign on and auto registration. Triggered on a GET to /login page. Still need different UI.
- now logged in after successful registration
- added node PID and port to admin UI
- tries to restart user's NR instance before giving up.
- write instance PID to disk right after starting up to track running node red instances for shutdown and future re-attach to FRED.
- added admin email config to admin UI so I can disable admin emails, change address without restart
- no longer starts instances on startup - admin must do this using admin pages
- created documentation site, added link to this documentation site

###Release 0.1.0

Date: Feb. 2, 2015

Initial Release of FRED.
