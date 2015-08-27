({
    baseUrl: "./public/js",
    paths: {
        jquery: "empty:",
        underscore: "empty:",
        backbone: "empty:",
        bootstrap: "empty:"
    },
    name: "main",
    out: "./public/js/main-built.js",
    mainConfigFile: './public/js/main.js',
    exclude: ["jquery","underscore","backbone","bootstrap"]
})
