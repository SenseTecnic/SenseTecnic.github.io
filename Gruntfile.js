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
        },
        semanticui: {
          files: [{
            expand: true,
            cwd: "bower_components/semantic-ui/dist",
            src: "semantic.min.css",
            dest: "resources"
          },
          {
            expand: true,
            cwd: "bower_components/semantic-ui/dist",
            src: "semantic.min.js",
            dest: "resources"
          },
          {
            expand: true,
            cwd: "bower_components/semantic-ui/dist",
            src: "semantic.min.js",
            dest: "resources"
          },
          {
            expand: true,
            cwd: "bower_components/semantic-ui/dist",
            src: ['themes/**'],
            dest: "resources/themes"
          },
          {
            expand: true,
            cwd: "bower_components/semantic-ui/dist",
            src: ["components/**"],
            dest: "resources/components"
          }],
        },
        exec: {
          jekyll: {
            cmd: "jekyll build --trace"
          }
        }
      }
    });

    grunt.registerTask('default', ['copy:jquery','copy:bootstrap']);
}

