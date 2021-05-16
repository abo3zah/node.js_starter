const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/' , async (req , res)=>{
    
    await readFile('./main.html','utf8',(err, html)=>{
        if (err){
            res.status(500).send('Sorry, Out of Order');
        }
        res.send(html);  
    })
})

app.listen(process.env.PORT || 3000, () => console.log('App available'))