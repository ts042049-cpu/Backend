import express from "express"
import { getUser , createUrs, updUsr, delUrs, getById } from "../controllers/user.js"

const route = express.Router()

route.get('/user', getUser)
route.post('/user', createUrs)
route.put('/user/:id', updUsr)
route.delete('/user/:id', delUrs)
route.get('/getById/:id', getById)
export default route