const express = require('express')
const bcrypt=require('bcrypt')
const router=express.Router()
const {signup , signin, resetpassword,newPassword ,verify,logout} = require('../controllers/AuthController')
const {withAuth}=require('../middleware')


router.post('/signup',signup)
router.post('/signin',signin)
router.post('/resetPassword',resetpassword)
router.post('/newPassword/:token',newPassword)
router.post('/verify',withAuth,verify)
router.post('/logout',logout)
module.exports=router