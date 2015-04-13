module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        jquery: {
          files: [{
            expand: true,
            cwd: "bower_components/jquery/dist/",
            src: "jquery.min.js",
            dest: "resources"
          }]
        },
        bootstrap: {
          files: [{
            expand: true,
            cwd: "bower_components/bootstrap/dist/css",
            src: "bootstrap.min.css",
            dest: "resources"            
          },
          {
            expand: true,
            cwd: "bower_components/bootstrap/dist/js",
            src: "bootstrap.min.js",
            dest: "resources"            
          }]
        }
      },
      exec: {
        build: {
          cmd: 'jekyll build'
        },
        serve: {
          cmd: 'jekyll serve --watch'
        }
      }
    });

    grunt.registerTask('default', 'copy');
    grunt.registerTask('serve', 'exec');
}

