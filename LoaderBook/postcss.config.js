module.exports = {
    plugins: [
        require('postcss-for'),
        require('postcss-color-mod-function'),
        require('postcss-preset-env')({
            "autoprefixer": {
                "flexbox": "no-2009"
            },
            "stage": 3,
            "features": {
                "color-mod-function": true,
                "custom-properties": false,
                "nesting-rules": true
            }
        })
    ]
}