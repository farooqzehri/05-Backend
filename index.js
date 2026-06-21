const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

    const allTodos = []
    
    const checkMiddleWare = (req ,res , next) => {
        console.log('check middle ware');
        next();
    }

    app.get('/', checkMiddleWare, (req , res) => {
        res.send('Hello World!')
    })
   app.post("/todo", (req, res) => {
  const { title } = req.body;
  allTodos.push({
    title,
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
    app.get('/', (req , res) => {
    res.send("hello World");
    })

// app.get('/about' , (req , res) => {
//     res.send("About PAge")
// })
app.get('/contact' , (req , res) => {
//     res.send("contact page")
// })
// app.get('/home' , (req , res) => {
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