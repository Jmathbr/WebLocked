module.exports.home = function(app, req, res){
    res.render('home/index');
}
module.exports.autenticar = function(app, req, res){

    var dadosForm = req.body;
    
    req.assert('email','Email nao pode ser vazio').notEmpty();
    req.assert('senha','Senha nao pode ser vazio').notEmpty();
    
    var erros = req.validationErrors();
    
        if(erros){
            res.render('home/index',{validacao: erros, dadosForm: dadosForm})
            return;
        }
        res.send('Sessao criada')
}