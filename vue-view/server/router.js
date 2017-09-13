// server operation
// const 
exports.login = function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    if(username == 'htt' && password == '123'){
        console.log('login successed')
        return res.json({
            'code': 200,
            "message": "login successed"
        })
    }
    else{
        console.log('login failed')
        return res.json({
            'code': 404,
            "message": "login failed"
        })
    }
}
exports.question = function(req, res, next) {
    let title = req.body.title;
    let tag = req.body.tag;
    let desp = req.body.desp;
    return res.json({
        'code': 200,
        "message": "ok"
    })
}