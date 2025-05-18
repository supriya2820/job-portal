import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'

const router = express.Router()

//GET USER DATA
router.get('/user',getUserData)

//APPLY FOR A JOB
router.post('/apply', applyForJob)

//GET APPLIED JOBS DATA
router.get('/applications', getUserJobApplications)

//UPDATE USER PROFILE (RESUME)
router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router;