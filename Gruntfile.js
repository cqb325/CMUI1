/**
 * Created by chenqb on 2015/7/4.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                globals: {
                    jQuery: true
                }
            },
            files: ['src/js/*.js']
        },
        uglify: {
            options: {
                banner: '/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */\n'
            },
            dist: {
                files: {
                }
            }
        },
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: './src/theme/',
                    src: ['**/*.less'],
                    dest: './assets/theme/',
                    ext: '.css'
                }]
            },
            compileCore: {
                options: {
                    strictMath: true,
                    outputSourceFiles: true
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            minifyCore: {
                files: [{
                    expand: true,
                    cwd: './assets/theme/',
                    src: ['**/*.css','!**/*.min.css'],
                    dest: './assets/theme/',
                    ext: '.min.css'
                }]
            }
        },
        react: {
            options: {
                es6module: true
            },
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/jsx',
                        src: ['**/*.jsx'],
                        dest: 'src/es6',
                        ext: '.js'
                    }
                ]
            }
        },
        babel: {
            options: {
                presets: ['es2015','react'],
                "plugins": ["transform-es2015-modules-amd","transform-class-properties",
                    "syntax-class-properties","transform-object-assign"]
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "src/jsx",
                    "src": ["**/*.jsx"],
                    "dest": "assets/dist",
                    "ext": ".js"
                }]
            },
            demo: {
                files: [{
                    "expand": true,
                    "cwd": "html/demo",
                    "src": ["**/*.jsx","**/**/*.jsx"],
                    "dest": "html/demo",
                    "ext": ".js"
                }]
            }
        },

        watch: {
            jsx: {
                files: ['src/**/*.jsx','html/**/*.jsx'],
                tasks: ["babel"]
            },
            files: ['<%= jshint.files %>','src/theme/**/*.less'],
            tasks: ["less",'cssmin',"uglify"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-babel');

    // 只需在命令行上输入"grunt"，就会执行default task
    grunt.registerTask('default', ['jshint','uglify', 'less','cssmin']);
};
