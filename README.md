# Note-React

## Gulpfile

### Config 

Config file is `lib/gulp/config.js`

#### Task "vendor"

##### vendor.dest

Destination folder. Usually `public`

##### vendor.plugins

Plugins list to move in public folder that is defined by `vendor.dest` option of this config

```
vendor: {
    plugins: [
        'react',
        'react-dom'
    ]
}
```    

##### vendor.options

###### vendor.options.package

The package name in which the plugin (`node_modules`, `bower_components`, `lib`, ets.). Default `node_modules`.

###### vendor.options.js
 
JS file of plugin to concat to `js/vendor.js` file in destination folder.

By default JS file of plugin `pluginName` is equal to `node_modules/pluginName/dist/pluginName.min.js`

If JS file of plugin has another `path` (default equals `dist`) or `name` (default is equal to the name of plugin) then 
`options.pluginName.path` and/or `options.pluginName.name` properties must be set.

```
vendor: {
    plugins: [
        'select2'
    ],
    options: {
        select2: {
            js: {
                path: 'dist/js'
            }
        }
    }
}
```

To concat non-minimized version of file you must set property `noMin` to `true`. In this case  
JS file name is equal to `pluginName.js` (without `.min` suffix).

###### vendor.options.css

CSS file of plugin to concat to `css/vendor.css` file in destination folder.

If you need to concat CSS file of plugin then you must specify path to it (without package name) inside the `css` 
property. 

```
vendor: {
    plugins: [
        'select2'
    ],
    options: {
        select2: {
            css: {
                path: 'dist/css'
            }
        }
    }
}
```

Non-default name and not minimized version of CSS file is defined similarly JS files. 

###### vendor.options.additional

Additional JS files of plugin to concat to `js/vendor.js` file in destination folder.

To concat additional JS file of plugin you must add object with properties:
 - `path` - file path in package of plugin 
 - `name` - file name without extention and `.min` suffix
 - `noMin` - (optional) `true` for non-minimized file
 in the `options.pluginName.additional` array.  
 
```
 vendor: {
    plugins: [ 'moment' ],
    options: {
        additional: [
            {path: 'localise', name: 'ru', noMin: true},
            {path: 'localise', name: 'uk', noMin: true}
        ]
    }
 }
```

###### vendor.options.assets

Resurse folders of plugin to copy in destination folder.

To copy resurse folder of plugin you must add resurse folder name  in `options.pluginName.assets` array.  

```
vendor: {
    plugins: [ 'font-awesome' ],
    options: {
        'font-awesome': {
            assets: [
                'fonts'
            ],
            'package': 'lib'
        },
    }
}
```






