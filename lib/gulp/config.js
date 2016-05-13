/**
 * Created by tigra on 13.05.16.
 */
'use strict';

module.exports = {
    vendor: {
        plugins: [
            'react',
            'react-dom',
            //'select2',
            //'moment'
        ],
        options: {
            select2: {
                path: 'dist/js',
                css: 'dist/css',
                cssNoMin: true
            },
            moment: {
                path: 'min',
                extend: [
                    {path: 'locale', name: 'ru', noMin: true}
                ]
            }
        }
    }
};
