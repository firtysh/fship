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
router.post('/register', (req: Request, res: Response) => {
    // console.log(req.body.questions); 
    console.log("/register" + req.body.username);
    
    if (req.body.username) {
        const user = new User({
            username: req.body.username,
            password: passwordGenarator(8),
            questions: [...req.body.questions],
        });
        user.save().then((result) => {
            res.header("Access-Control-Allow-Headers", "*");
            res.header('Access-Control-Allow-Credentials', "true");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.status(201)
                .cookie('name', result.username, {maxAge:30*24*60*60*1000, httpOnly: false, secure: true ,path:'/'})
                .cookie('password', result.password, {maxAge:30*24*60*60*1000, httpOnly: false, secure: true ,path:'/'})
                .cookie('id', result._id.toString(), {maxAge:30*24*60*60*1000, httpOnly: false, secure: true ,path:'/'})
                .cookie('isLoggedIn', true, {maxAge:30*24*60*60*1000, httpOnly: false, secure: true, path:'/' })
                .json({ message: 'User created!', user: { name: result.username, password: result.password, id: result._id,isLoggedIn:true } });
        }).catch((err) => {
            res.status(500).json({ message: 'User creation failed!', error: err });
        });
    } else {
        res.status(400).json({ message: 'Username is required!' });
    }
});
router.post('/logout', (req: Request, res: Response) => {
    res.send('Logged out!');
});

export default router;