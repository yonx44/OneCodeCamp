function ageCalculator() {

var dateOfBirth = document.getElementById("DOB").value;
var dob = new Date(dateOfBirth);
  
if (dateOfBirth == null || dateOfBirth == '') {
    document.getElementById("message").innerHTML = "Choose a date!";  
    return false; 
    } 
    else {
        var month_diff = Date.now() - dob.getTime();

        var age_dt = new Date(month_diff); 
   
        var year = age_dt.getUTCFullYear();
  
        var age = Math.abs(year - 1970);

        return document.getElementById("result").innerHTML =  "Age is " + age + " years old ";
    }
}