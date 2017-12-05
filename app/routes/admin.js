module.exports = function(app){
    app.get('/admin', function(req,res){
        app.app.controllers.admin.admin(app, req, res)
    })
}

module.exports = function(app){
    app.get('/sair', function(req,res){
        app.app.controllers.admin.sair(app, req, res)
    })
}