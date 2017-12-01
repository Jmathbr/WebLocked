module.exports.cadastro = function(app, req, res){
    res.render('usrq/cadastro');
}

module.exports.cadastrar = function(app, req, res){
    var dadosForm = req.body;

    req.assert('nome','nome Nao pode ser vazio').notEmpty();
    req.assert('email','Email Nao pode ser vazio').notEmpty();
    req.assert('matricula','idade Nao pode ser vazio').notEmpty();
    req.assert('date','data de nascimento Nao pode ser vazio').notEmpty();
    req.assert('contato','contato Nao pode ser vazio').notEmpty();
    req.assert('projeto','projeto Nao pode ser vazio').notEmpty();
    

    var erros = req.validationErrors();

    if(erros){
        res.send('Existe erros no formulario de cadastro')
        return;
    }
    res.send('possivel cadastrar')
}