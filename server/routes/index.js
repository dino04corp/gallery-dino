const path = require("path")
const api = require("./api")

let routes = (app) => {
    app.get('/dashboard', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/dashboard/index.html'))
    })
    app.get('/ping', (req, res) => {
        res.status(201).json({
            message: "Hello, world!",
            success: true,
        });
    })
    app.get('/docs', (req, resp) => {
        resp.redirect('https://documenter.getpostman.com/view/11424693/2sA3Bj8tca');
    })
    app.use('/api', api)
};

module.exports = routes;