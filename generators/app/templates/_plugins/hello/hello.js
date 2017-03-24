module.exports = function setup(options, imports, register) {
    function definePlugin(app) {
        console.log("Request to hello plugin");

        // A simple ram-based key-value database with some default values
        app.get('/hello', (req, res, next) => {
            res.send({message: "Hello from Hello-Plugin"});
            console.log("Request to hello plugin");
        });
    }
    register(null, {
        helloRouter: definePlugin
    });
};