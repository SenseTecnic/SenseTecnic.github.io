# SenseTecnic.github.io
Sense Tecnic Github Page

The static page site use jekyll.  More on jekyll at these links:

- https://help.github.com/articles/using-jekyll-with-pages/
- https://github.com/jekyll/jekyll

I've set up a GruntFile to make it easier to remember how to build and serve the site.  To build the page ensure you've installed grunt:

    npm install -g grunt
    npm install

Then call grunt

    grunt
    
To run it on a local web server for testing.

    grunt serve
    
To deploy the site, just commit to master.  It can then be viewed at http://sensetecnic.github.io/fred/
