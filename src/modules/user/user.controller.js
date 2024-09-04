import { Message } from "../../../db/models/messages.model.js"

export const getUser = (req,res,next)=>{
    res.render('user.ejs',{userId:req.params.id})
}

export const send =async(req,res,next)=>{
    //save mess
    req.body.user =req.params.id
    await Message.create(req.body)
    
    res.redirect('/user/' +req.params.id)
}