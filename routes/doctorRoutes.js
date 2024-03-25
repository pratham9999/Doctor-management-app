const express = require("express") ;
const { getDoctorInfoController , updateProfileController , getDoctorByIdController ,} = require("../controllers/doctorCtrl.js")
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

// post Single Doc Info '
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// post uodate Profile 
router.post("/updateProfile", authMiddleware, updateProfileController);



// post get single doc info

router.post("/getDoctorById" , authMiddleware , getDoctorByIdController); 

// get appointments 


// post update status 
 


module.exports = router ;
