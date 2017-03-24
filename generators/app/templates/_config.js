module.exports = [
    {
        packagePath: "./express-server",
        root: "express-server",
        port: process.env.PORT || 8080,
        host: process.env.IP || "0.0.0.0"
    },
    "./plugins/hello"
]