import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")   
})

app.get('/contact', (req, res) => {
    res.json({
      "message": "this is contact page"
    })
})

app.get('/about', (req, res) => {
  res.send("<h1>This is About</h1>")
})

let user = ["VIVO", "OPPO", "APPLE"]

app.get('/user', (req, res) => {
  res.status(200).json({
    "message" : "data sent",
    success: true,
    user
  })
})

app.post("/create",(req, res) => {
  let name = req.body.name;
  if(!name){
    return res.status(404).json(
      {
        "message":"Name not found",
        success:false
      }
    )
  }
  user.push(name)

  res.status(200).json({
    message:"User Created Success",
    success:true,
  })
  console.log(user);
})

app.put("/update", (req, res) => {
  let {name, newName} = req.body
  if(!name || !newName){
    return res.status(404).json()({
      message:"Name not found",
      success: false
    })
  }
  let index = user.indexOf(name)
  user[index] = newName

  res.status(200).json({
    message:"Name update",
    success:true,
    user
  })
})

app.delete("/delete", (req, res) => {
  let {name} = req.body
  let index = user.indexOf(name)
  if(!name || !index){
    return res.status(403).json()({
      message:"Name not found",
      success: false
    })
  }
  user.splice(index, 1)
 res.status(200).json({
    message:"Name Deleted",
    success:true,
    user
  })
})

app.listen(3000, () => {
  console.log("http://localhost:3000/");
})