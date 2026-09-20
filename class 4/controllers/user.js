import fs from 'fs'


function getData(){
    let data = fs.readFileSync('database/data.json', 'utf-8')
    data = JSON.parse(data)
    return data
}

const getUser = (req,res) => {
  let data = getData()
  res.status(200).json({
    message:"data fetched",
    success:true,
    data
  })
}

const createUrs = (req, res) => {
  let {name, age, id} = req.body
  if(!name || !age || !id){
    return res.status(400).json({
      message: "data empty",
      success: false
    })
  }
  let data = getData()
  data.push({name, age, id})
  fs.writeFileSync('database/data.json', JSON.stringify(data, null, 3))
  res.status(200).json({
    message:"Data created",
    success:true,
    data
  })
}

const updUsr = (req, res) => {
  let {name, age} = req.body
  let id = req.params.id
  let data = getData()
  let usr = data.find((e)=> e.id === Number(id))

  if(name){
    usr.name = name
  }
  if(age){
    usr.age = age
  }

  fs.writeFileSync('database/data.json', JSON.stringify(data, null, 3))
  res.status(200).json({
    message:"Data updated",
    success:true,
    data
  })
}

const delUrs = (req, res) => {
  let id = req.params.id
  let data = getData()
  let usr = data.find((e)=> e.id === Number(id))
  let index = data.indexOf(usr)
  data.splice(index, 1)
  fs.writeFileSync('database/data.json', JSON.stringify(data, null, 3))
  res.status(200).json({
    message:"user deleted",
    success:true,
    data
  })
}


const getById = (req,res)=>{
  const {id} = req.params
  let data = getData()
  let user = data.find((element)=>{
    return element.id === id
  })

  if (!user) {
    return res.status(404).json({
      message: "Data did not found",
      success: false
    })
  }

  res.status(200).json({
    message: "User found successfully",
    success: true,
    user
  })  
}

export {getUser, createUrs, updUsr, delUrs,getById}