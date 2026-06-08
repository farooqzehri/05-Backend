const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req , res) => {
    res.send("hello World");
    })
app.get('/about' , (req , res) => {
    res.send("About PAge")
})
app.get('/contact' , (req , res) => {
    res.send("contact page")
})
app.get('/home' , (req , res) => {
    
})
app.get('/services' , (req  , res) => {
    res.send("services page new")
})
app.get('/users/:id' , (req , res) => {
    res.send( req.params.id)
})
app.get('/products/:id' , (req , res) => {
res.send(req.params.id)
})
app.get('/items/:id', (req, res)=>{
    res.send(req.params.id)
})
app.get('/search' , (req , res) => {
    res.send(req.query)
})
const logger = (req , res , next) => {
    console.log(req.method , res.url);
    next();
    
}
app.use(logger);
app.listen(port , () => {
    console.log('response is ready' , port);
})