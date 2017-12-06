module.exports.admin = function(app, req, res){
    if(req.session.autorizado == true){
        res.render('admin')
    }
    else{
        res.send("precisa de autenticaçao")
    }

}
module.exports.sair = function(app, req, res){
    req.session.destroy(function(err){
        res.send('controller sair')
    })
}