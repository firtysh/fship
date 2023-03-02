import express, { Router, Request, Response } from 'express';
import User from '../models/user.js';
const router: Router = express.Router();

router.post('/response', (req: Request, res: Response) => {
    if (req.body.id && req.body.password) {
        User.find({ _id: req.body.id }).then((result) => {
            if (result[0]?.password === req.body.password) {
                res.json({ message: result[0].response });
            } else {
                res.status(401).json({ message: 'Unauthorized!' });
            }

        })
    } else {
        res.status(400).json({ message: 'Bad request!' });
    }
});
router.post('/response/add', (req: Request, res: Response) => {
    if (req.body.id && req.body.response) {
        User.find({ _id: req.body.id }).then((result) => {
            result[0]?.response.push(req.body.response);
            result[0]?.save().then((result) => {
                res.status(201).json({ message: 'Response added!' });
            }).catch((err) => {
                res.status(500).json({ message: 'Response addition failed!', error: err });
            });
        }).catch((err) => {
            res.status(500).json({ message: 'Response addition failed!', error: err });
        });
    }
})

router.post('/questions', (req: Request, res: Response) => {
    if(req.body.id){
        User.find({_id:req.body.id})
        .then((result)=>{
            res.status(200).json({message:result[0].questions});
        })
        .catch((err)=>{
            res.status(500).json({message:'Server error!',error:err});
        });
    }else{
        res.status(400).json({message:'Bad request!'});
    }
})


export default router;