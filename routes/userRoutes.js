const express = require('express') ;
const { loginController, registerController, authController , applyDoctorController , getAllNotificationController , deleteAllNotificationController , getAllDoctorsController , bookeAppointmnetController , bookingAvailabilityController , userAppointmentsController ,  } = require('../controllers/userCtrl');
const authMiddleware = require('../middleware/authMiddleware');
//const { getAllDoctorsController } = require('../controllers/adminCtrl');
// router object 

const router = express.Router() 

// routes

// login route 
router.post("/login" , loginController);


// Register route 
router.post("/register" , registerController);

// auth || post
router.post("/getUserData" , authMiddleware , authController)

// apply doctor 
router.post("/apply-doctor" , authMiddleware , applyDoctorController)

// for notification

router.post("/get-all-notification" , authMiddleware , getAllNotificationController)

// delete notification
router.post("/delete-all-notification" , authMiddleware , deleteAllNotificationController )
// get all docs 

router.get("/getAllDoctors" , authMiddleware , getAllDoctorsController)

// book appointment  
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);


// book availabily 

router.post(
    "/booking-availbility",
    authMiddleware,
    bookingAvailabilityController
  );
  
  // appointment List 
  //Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);



module.exports = router
