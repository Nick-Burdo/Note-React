# Note-React

## Gulpfile

###Config

####Tack "vendor"

#####Plugin's list

`plugins` - plugins list to concat from `node_modules` folder to the `public/js/vendor.js` file

#####Options

######JS files
By default `src` of plugin's `pluginName` file equal `node_modules/pluginName/dist/pluginName.min.js`

If plugin's file `srs` has another `path` (default equal `dist`) or `name` (default equal plugin name) then apropriate 
properties must be set in the `options` as properties of object with name equal to plugin name.

To concat not minimize plugin's file version you must set property `noMin` equal `true`. In this case `src` of plugin's 
`pluginName` file equal `node_modules/pluginName/dist/pluginName.js` (without suffix `.min`).

######CSS files

If you need to concat plugin's `css` file then you must specify the path to it (without `node_modules`) in the `cssPath` 
property. 

If plugin's `css` file must be not minimize and `noMin` property is no set then you must set property `cssNoMin` 
equal `true`. 
