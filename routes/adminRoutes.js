const express = require("express") ;

const  {getAllUserController , getAllDoctorsController , changeAccountStatusController} = require("../controllers/adminCtrl")

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// get method || user 

router.get("/getAllUser" , authMiddleware , getAllUserController); 

// get Method || Doctors ;

router.get("/getAllDoctors" , authMiddleware , getAllDoctorsController) ;

 //post Account status 
 router.post("/changeAccountStatus" , authMiddleware , changeAccountStatusController) ;



module.exports = router ;