/**
 * Vue config
 */

const NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production';

module.exports = {
    productionSourceMap: false,
    publicPath         : undefined,
    outputDir          : undefined,
    assetsDir          : 'design',
    runtimeCompiler    : undefined,
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

    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/config/env-production.scss";',
            },
        },
    },
};
