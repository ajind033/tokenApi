var Token = require ('..//models/token.model.js');

exports.create = (req,res) =>{
    
        var entry = new Token({
            reason : req.body.reason,
            acno :req.body.acno
        });
        entry.save()
        .then(() => res.send('Success creating Token '))
        .catch((err) => console.log(err));
    };

    exports.getaTok = (req,res,tokno1) =>{
        
        Token.find({ 'tokno': tokno1 },'-__v',  (err, tok)=> {
                       if(err)
                        res.send(err);
                        
                       res.send(JSON.stringify(tok));
        });
    }
    exports.getallTok = (req,res) =>{
        
                Token.find({ reason: { $ne: "current token" } },'-__v',  (err, tok)=> {
                               if(err)
                                res.send(err);
                                
                               res.send(JSON.stringify(tok));
                });
            }
    
     exports.getacurTok = (req,res) =>{
           
        var id= "59d76fb239d7af00b4835a9e";
            Token.findById(id,'-_id acno',  (err, tok)=> {
                                       if(err)
                                        res.send(err);
                                        
                                        res.send("{\"tokno\" : "+tok.acno+"}");
             });
             }

    exports.updatecurrent = (req,res)=>{
        var id= "59d76fb239d7af00b4835a9e";
Token.findByIdAndUpdate(id,{ $inc : { 'acno' : 1 }}, (err, tok) => {
            if (err) {
                res.status(500).send(err);
            } else {
                var temp = tok.acno + 1;
                res.send("{\"tokno\" : "+temp+"}");
            }
        });
     
     
    }