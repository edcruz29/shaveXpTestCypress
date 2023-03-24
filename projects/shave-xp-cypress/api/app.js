const express = require('express')
const app = express()
const {deleteUser, insertUser} = require('./db')
const bcrypt = require('bcrypt');

app.get('/welcome', function(req,res){
    res.send({message:'Olá QAX'})
})


app.use(express.json())

app.delete('/user/:email', async function(req,res){
    

    const {email} = req.params
    console.log(email)

    await deleteUser(email)

    res.status(204).end()

})
app.post('/user', async function(req,res){
    
    const {name,email,password, is_shaver} = req.body
    
    const hashpass = await bcrypt.hash(password,8)
    const user = {

        name: name,
        email: email,
        password: hashpass,
        is_shaver: is_shaver
    }
    if(!user.name||!user.email||!user.password){
        return res.status(400).json({message:"MANDATORY FIELDS!"})
    }

    try {

        await deleteUser(user.email)

        res.status(204).end()

        
    } catch (error) {


        
    }

    const id = await insertUser(user)
    res.status(201).json({user_id:id})

})
app.listen(8000)