import express from 'express'
import User from '../models/userMondel.js';
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config();
import JWT from 'jsonwebtoken'


const router = express.Router();
const SECRATE_KEY = process.env.secrate_key;

// 01: create router 
router.post('/create', async (req, res) => {

    try {

        const {name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({ message: 'please fill all the input' });

        const isExist = await User.findOne({ email });

        if (isExist) return res.status(400).json({ message: 'User allready exist' })


        const salt = await bcrypt.genSalt(10);

        const hassPass = await bcrypt.hash(password, salt);


        const newUser = new User({
            name,
            email,
            password: hassPass,
        })

        await newUser.save();

        const token = await JWT.sign({ name: newUser.name, email: newUser.email }, SECRATE_KEY, { expiresIn: '1d' });

        res.status(200).json({ message: 'user create successfully', user: newUser, token: token });

    } catch (error) {
        res.status(500).json({ message: "faild to craete user", error: error.message });

    }
});

export default router;