import express from 'express'
import Post from '../models/post'

const router = express.Router()

import { authMiddleware } from './Utils/auth'

router.use(authMiddleware)

router.post('/', async(req,res) =>{
     try{
        const post = await Post.create(req.body)
        res.status(200).json(post)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: Error.message})
    }
})
router.get('/' ,async(req, res) => {
    try{
const post = await Post.find({})
        res.status(200).json(post)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: Error.message})
    }
})

export default router