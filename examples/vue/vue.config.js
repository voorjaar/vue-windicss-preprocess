// vue.config.js
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: '../../dist/index.js',
                options: {
                    // config: 'tailwind.config.js',
                    compile: false,
                    globalPreflight: true,
                    globalUtility: true,
                    prefix: 'windi-',
                }
            }]
        });
    }
}