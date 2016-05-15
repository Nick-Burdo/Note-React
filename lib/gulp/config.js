/**
 * Created by tigra on 13.05.16.
 */

module.exports = {
    vendor: {
        plugins: [
            'react',
            'react-dom',
            //'select2',
            //'moment',
            'font-awesome',
            'bootstrap'
        ],
        options: {
            'react': {
                js: {
                    noMin: true
                }
            },
            'select2': {
                js: {
                    path: 'dist/js'
                },
                css: {
                    path: 'dist/css',
                    noMin: true
                }
            },
            'moment': {
                js: {
                    path: 'min'
                },
                additional: [
                    {
                        path: 'locale',
                        name: 'ru',
                        noMin: true
                    },
                    {
                        path: 'locale',
                        name: 'uk',
                        noMin: true
                    }
                ]
            },
            'font-awesome': {
                css: {
                    path: 'css'
                },
                assets: [
                    'fonts'
                ],
                'package': 'lib'
            },
            'bootstrap': {
                css: {
                    path:'.'
                },
                'package': 'lib'
            }
        },
        dest: 'public'
    },
    assets: {
        src: ['src/**', '!src/', '!src/css/', '!src/js/', '!src/css/**', '!src/js/**'],
        dest: 'public/'
    },
    browserify: {
        src: './src/js/app.js',
        dest: './public/js'
    },
    sass: {
        src: './src/sass/app.scss',
        dest: './public/css/',
        autoprefixer: {
            browsers: ['> 1%', 'last 2 versions'],
            cascade: false
        }
    },
    html: {
        src: './src/index.html',
        dest: './public/'
    },
    img: {
        src: './src/img/**/*',
        dest: './public/img/'
    },
    build: {
        dest: 'public'
    }
};
