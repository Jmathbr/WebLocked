module.exports.cadastro = function(app, req, res){
    res.render('usrq/cadastro', {validacao: {},dadosForm: {}});
}

module.exports.cadastrar = function(app, req, res){

    var dadosForm = req.body;

    req.assert('nome','Nome nao pode ser vazio').notEmpty();
    req.assert('email','Email nao pode ser vazio').notEmpty();
    req.assert('matricula','Idade nao pode ser vazio').notEmpty();
    req.assert('date','data de nascimento nao pode ser vazio').notEmpty();
    req.assert('contato','Contato nao pode ser vazio').notEmpty();
    req.assert('senha','Senha nao pode ser vazio').notEmpty();
    req.assert('senha','As senhas nao sao iguais').equals(dadosForm.rsenha);

    var erros = req.validationErrors();

    if(erros){
        res.render('usrq/cadastro',{validacao: erros, dadosForm: dadosForm})
        return;
    }
    dadosForm.classe = 'C';
    var connection = app.config.dbConnection;
    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm)

    res.redirect("/")
}