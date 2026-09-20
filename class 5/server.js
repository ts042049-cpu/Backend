import express from "express"
const app = express()
const port = 3000


app.get('/user', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    console.log("user logic")
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.params)
    console.log(req.haders)
})



app.listen(port, () => {
    console.log('Server is running on port', port )
})