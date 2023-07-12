//Dependency inversion Principles 

//Higher level modules should not depend on lowerr level modules




class EmailController { 
    sendEmail(emailDetails) { 
      const response = EmailApiController.sendEmail(emailDetails);   
      if (response.status == 200) { 
         return true;
      } else {
         return false;
      }
    }
  }
  
  class EmailApiController {
    sendEmail(emailDetails) {
      // Only need to change this controller. return YahooAPI.sendEmail(emailDetails);
    }
  }