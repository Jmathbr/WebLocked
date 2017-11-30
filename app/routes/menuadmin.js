module.exports = function(app){
    app.get('/menuadmin', function(req,res){
        app.app.controllers.menuadmin.menuadmin(app, req, res)
    })
}