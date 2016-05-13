# Note-React

## Gulpfile

###Config

#### Task "vendor"

#####Plugins list

`plugins` - plugins list to concat files from `node_modules` folder to `public/js/vendor.js` 

```
vendor: {
    plugins: [
        'react',
        'react-dom'
    ]
}
```    

#####Options

######JS files
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
            path: 'dist/js'
        }
    }
}
```

To concat non-minimized version of file you must set property `noMin` to `true`. In this case  
JS file of plugin is equal to `node_modules/pluginName/dist/pluginName.js` (without `.min` suffix).

######CSS files

If you need to concat CSS file of plugin then you must specify path to it (without `node_modules`) in the `css` 
property. 

```
vendor: {
    plugins: [
        'select2'
    ],
    options: {
        select2: {
            css: 'dist/css'
        }
    }
}
```

Non-default CSS file name (another from plugin name) is set in the `cssName` property.

If CSS file of plugin is not minimized and `noMin` property is not set then you must set the `cssNoMin` property to `true`. 

###### Additional files

To concat additional JS file of plugin you must add object with properties:
 - `path` - file path without `node_modules`
 - `name` - file name without extention and `.min` suffix
 - `noMin` - (optional) `true` for non-minimized file
 in the `options.pluginName.extend` array.  
 
```
 vendor: {
    plugins: [ 'moment' ],
    options: {
        extend: [
            {path: 'localise', name: 'ru', noMin: true},
            {path: 'localise', name: 'uk', noMin: true}
        ]
    }
 }
```