const express=require('express')
const app=express();
const port=3000
app.get('/health',function(req,res){
    res.send('Hello i am in abroad');
})

app.listen(port,function(){
    console.log(`server is running on port ${port}`);
});
