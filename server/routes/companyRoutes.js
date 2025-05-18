import express from 'express'
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//REGISTER A COMPANY
router.post('/register', upload.single('image'), registerCompany)

//COMPANY LOGIN
router.post('/login',loginCompany)

//GET COMPANY DATA
router.get('/company', protectCompany, getCompanyData)

//POST A JOB
router.post('/post-job',protectCompany, postJob)

//GET APPLICANTS DATA OF COMPANY
router.get('/applicants',protectCompany, getCompanyJobApplicants)

//GET COMPANY JOB LIST
router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

//CHANGE APPLICATION STATUS
router.post('/change-status',protectCompany, ChangeJobApplicationsStatus)

//CHANGE APPLICATIONS VISIBLITY
router.post('/change-visiblity', protectCompany ,changeVisiblity)

export default router