const express=require('express')
const router=express.Router()
const{ createPlan, getAllPlan, getOnePlan, deletePlan, updatePlan }=require('../controllers/dietPlanController')
const {withAuth} = require('../middleware')

router.get('/',withAuth,getAllPlan);

router.get('/:id',getOnePlan);

router.post("/",withAuth,createPlan);

router.delete("/:id",deletePlan);

router.put("/:id",updatePlan);

module.exports=router