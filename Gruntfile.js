/*global module:false*/
module.exports = function(grunt) {

  var serveStatic = require('serve-static');
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    requirejs: {
        compile: {
            options: {
                baseUrl: '.',
                paths: {
                'jquery': 'bower_components/jquery/dist/jquery.min',
                'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
                'angular': 'bower_components/angular/angular.min',
                'angularRoute': 'bower_components/angular-route/angular-route.min',
                'quicksand': 'bower_components/quicksand/jquery.quicksand.min',
                'migrate': 'bower_components/jquery-migrate/jquery-migrate.min',
                'scaling': 'public/plugin/jquery-animate-css-rotate-scale',
                'app': 'public/js/app',
                'mainCtrl': 'public/js/controllers/mainCtrl',
                'picture-carousel': 'public/js/directives/picture-carousel',
                'latest-movie': 'public/js/directives/latest-movie',
                'production': 'public/js/directives/production',
                'photos': 'public/js/directives/photos',
                'userService': 'public/js/services/userService',
                'goto': 'public/js/directives/goto'

              },
              shim: {
                    'angular' : {'exports' : 'angular'},
                    'angularRoute' : {deps:['angular']},
                    'bootstrap': {deps:['jquery']},
                    'migrate': {deps:['jquery']},
                    'quicksand': {deps:['jquery','migrate','scaling']},
                    'scaling': {deps:['jquery']}
                },
                // optimize:"none",
                name: 'public/plugin/almond',
                include: 'public/js/main',
                mainConfigFile: 'public/js/main.js',
                out: "public/js/main-built.js"
            }
        }
    },
    imagemin: {  
      /* 压缩图片大小 */  
      dist: {  
        options: {  
          optimizationLevel: 3, //定义 PNG 图片优化水平  
          progressive: true
        },  
        files: [  
          { 
            expand: true,
            cwd: 'public/res/images/',  
            src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg 图片  
            dest: 'public/res/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示  
          }  
        ]  
      }  
    }, 
    cssmin: {
        target: {
            options: {
                banner: '/* NJBLog minified css file */'
            },
            files: {
                'dest/<%= pkg.name %>.min.css': ['public/css/**/*.css']
            }
        }
      },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: 'public/js/*.js',
        dest: 'dest/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dest/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        force: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true,
        devel: true,
        reporter: require('jshint-stylish'),
        reporterOutput: '',
        ignores: ['public/plugin/jquery-animate-css-rotate-scale.js',
                  'public/js/main-built.js'],
        globals: {
          require: false,
          __dirname: false,
          module: false,
          define: false,
          'BMap': false,
          'BMAP_ANCHOR_TOP_LEFT': false,
          'BMAP_NAVIGATION_CONTROL_SMALL': false
        }
      },
      bower: {
        src: ['Gruntfile.js', 'public/js/**/*.js']
      },
      service: {
        src: ['Gruntfile.js', 'app.js', 'routes/**/*.js']
      }
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    connect: {
      options: {
        base: ['views/'],
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              serveStatic('views'),
              connect().use(
                '/bower_components',
                serveStatic('./bower_components')
              ),
              serveStatic('public')
            ];
          }
        }
      }
    },
    watch: {
       options: {
        spawn: false,
      },
      bower: {
        files: '<%= jshint.bower.src%>',
        tasks: ['jshint:bower']
      },
      service: {
        files: '<%= jshint.service.src%>',
        tasks: ['jshint:service']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'views/**/*.html',
          'public/css/*.css',
          'public/res/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
   grunt.registerTask('default', ['requirejs','cssmin', 'jshint','concat', 'uglify','connect', 'watch']);
   grunt.registerTask('bower', [
    'requirejs',
    'cssmin',
    'jshint:bower', 
    'concat', 
    'uglify',
    'connect',
    'watch'
    ]);
   grunt.registerTask('service', [
    'jshint:service',
    'watch:service'
    ]);
    grunt.registerTask('image',['imagemin']);
};
