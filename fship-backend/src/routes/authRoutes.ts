import express, { Router, Request, Response } from 'express';
import passwordGenarator from '../helpers/passwordGenarator.js';
import User from '../models/user.js';
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('This is auth route!');
});
router.post('/login', (req: Request, res: Response) => {
    res.send('Logged in!');
});
router.post('/signup', (req: Request, res: Response) => {
    console.log(req.body); 
    if(req.body.username){
        const user = new User({
            username: req.body.username,
            password: passwordGenarator(8),
        });
        user.save().then((result) => {
            res.status(201).json({message: 'User created!', user: {name:result.username,password:result.password,id:result._id}});
        }).catch((err) => {
            res.status(500).json({message: 'User creation failed!', error: err});
        });
    }else{
        res.status(400).json({message: 'Username is required!'});
    }
});
router.post('/logout', (req: Request, res: Response) => {
    res.send('Logged out!');
});

export default router;