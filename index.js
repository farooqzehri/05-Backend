// import express from 'express'
const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended : true}))

    const allTodos = []
    
    // const checkMiddleWare = (req ,res , next) => {
    //     console.log('check middle ware');
    //     next();
    // }

    // app.get('/', checkMiddleWare, (req , res) => {
    //     res.send('Hello World!')
    // })
   app.post("/todo", (req, res) => {
  const { title } = req.body;
  const {desc} = req.body
  const {name} = req.body
  const {fName} = req.body
  const {email} = req.body
  const {password} = req.body
  allTodos.push({
    title,
    desc,
    name,
    fName,
    email,
    password,
    id: Date.now(),
  });

  res.status(201).json({
    message: "New todo created",
    todos: allTodos,
  });
});
    // get Todo
  app.get("/todo", (req, res) => {
  res.status(200).json({
    todo: allTodos,
  });
});
// delete todo
app.delete('/todo/:id' , (req , res) => {
    const {id} = req.params;
    const index = allTodos.findIndex((item) => item.id === +id )

    if (index === -1){
        return res.status(404).json({
            message: 'todo not find'
        })
    }
    allTodos.splice(index , 1);
    res.status(200).json({
        message: 'todo deleted',
        todo: allTodos
    })
})

// edit todo
app.put('/todo/:id', (req , res) => {
    const {id} = req.params;
    const index = allTodos.findIndex((item)=> item.id === +id)
    if(index === -1){
        return res.status(404).json({
            message: 'todo not found!'
        })
    }
    allTodos[index].title = req.body.title
    res.status(200).json({
        message: "todo Edited Success",
        todo : allTodos
    })
})
//  home route
    app.get('/', (req , res) => {
    res.send("hello World");
    })

// app.get('/about' , (req , res) => {
//     res.send("About PAge")
// })
// app.get('/contact' , (req , res) => {
//     res.send("contact page")
// })
// // app.get('/home' , (req , res) => {
//     res.send("Hello I am Farooq Zehri")
// })
// app.get('/services' , (req  , res) => {
//     res.send("services page new")
// })
// app.get('/users/:id' , (req , res) => {
//     res.send( req.params.id)
// })
// app.get('/products/:id' , (req , res) => {
// res.send(req.params.id)
// })
// app.get('/items/:id', (req, res)=>{
//     res.send(req.params.id)
// })
// app.get('/search' , (req , res) => {
//     res.send(req.query)
// })
const logger = (req , res , next) => {
    console.log(req.method , res.url);
    next();
    
}
app.use(logger);
app.listen(port , () => {
    console.log('response is ready' , port);
})


// const express = require('express')
// const app = express()
// const port = 3000
// const allTodos = [
//     {
//         id: 1 , 
//         desc: "I loove Biryani",
//         completed: false
//     },
//     {
//         id: 2 , 
//         desc: 'I love Karahi',
//         completed: false
//     },
//     {
//         id: 3 ,
//         desc: 'i love roast',
//         completed: false
//     }
// ]

// app.get('/', (req, res, next) => {
//     res.send('Hello World')
// })

// app.get('/todos' , (req , res) => {
//     res.json(todos)
// })
// app.listen(port , () => {
//     console.log(`app is listening ${port}` );
    
// })