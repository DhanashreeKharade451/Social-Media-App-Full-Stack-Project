import express from 'express'
import Post from '../models/post.js'


const router = express.Router()

import { authMiddleware } from '../Utils/auth.js'

router.use(authMiddleware)

router.post('/', async(req,res) =>{
     try{

        console.log(req.body)
        console.log(req.user)
        const post = await Post.create({
            ...req.body,
            author: req.user._id
        })

             await post.populate('author', 'username')

       
        res.status(200).json(post)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: err.message})
    }
})
router.get('/' ,async(req, res) => {
    try{
        //can filter posts based of logged in user:{}
const post = await Post.find({})
                    .sort({createdAt: -1})
                    // turn the author (which is an id) into the user document for that author/id
                     // the second argument 'username' is the field in the user document we want to keep
                    .populate('author', 'username')
        res.status(200).json(post)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: err.message})
    }
})

export default router