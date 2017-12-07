module.exports = function(app){
    app.get('/admin', function(req,res){
        app.app.controllers.admin.admin(app, req, res)
    })

    app.get('/user', function(req,res){
        app.app.controllers.admin.user(app, req, res)
    })
    
    app.get('/sair', function(req,res){
        app.app.controllers.admin.sair(app, req, res)
    })
}