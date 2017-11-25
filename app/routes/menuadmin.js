module.exports = function(app){
    app.get('/menuadmin', function(req,res){
        res.render('usr/admn')
    })
}