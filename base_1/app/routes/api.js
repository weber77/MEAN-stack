const { Router } = require("express");
var User = require("../modules/user");
var Admin = require("../modules/admin");

module.exports = function(router){
    router.post('/createUsers', function(req, res){
        // res.send("testing user route");
    
        var user = new User();
    
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
    
        if (req.body.username == null || req.body.username == "" ||
            req.body.password == null || req.body.password == ""  ||
            req.body.email == null || req.body.email == "" ) {
                
                res.send('Ensure all fields are filled')
            
        } else {
            user.save(function (err) {
                if (err) {
                    res.send("usersame or email already exist!");
                }else{
                    res.send("user created");
                }
        
            }); 
        }

    
        
    });

    router.post('/createAdmin', function(req, res){
        // res.send("testing user route");
    
        var admin = new Admin();
    
        admin.username = req.body.username;
        admin.password = req.body.password;
        admin.email = req.body.email;
    
        if (req.body.username == null || req.body.username == "" ||
            req.body.password == null || req.body.password == ""  ||
            req.body.email == null || req.body.email == "" ) {
                
                res.send('Ensure all fields are filled')
            
        } else {
            admin.save(function (err) {
                if (err) {
                    res.send("usersame or email already exist!");
                }else{
                    res.send("admin created");
                }
        
            }); 
        }

    
        
    });
    return router;
}