/**
 * Vue config
 */

const path = require('path');

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

let indexTemplate = NODE_ENV === 'production'
    ? path.join(__dirname, 'private/templates/index.php')
    : path.join(__dirname, 'public/index.html');

module.exports = {
    productionSourceMap: false,
    publicPath         : '/',
    indexPath          : NODE_ENV === 'production' ? '../private/templates/base.php' : 'index.html',
    outputDir          : 'public_html',
    assetsDir          : 'design',
    runtimeCompiler    : false,
    parallel           : undefined,

    pluginOptions: {
        prerenderSpa: {
            registry      : undefined,
            renderRoutes  : [
                '/',
            ],
            useRenderEvent: true,
            headless      : true,
            onlyProduction: true,
        },
    },

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].minify   = true;
                args[0].template = indexTemplate;
                return args;
            });
    },

    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/config/env-production.scss";',
            },
        },
    },
};
