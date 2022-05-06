
function doResume(){
   var myPage;
   let name = document.getElementById("name").value;
   let street = document.getElementById("street").value;
   let city = document.getElementById("city").value;
   let state = document.getElementById("state").value;
   let zip = document.getElementById("zip").value;
   let phone = document.getElementById("phone" ).value;
   let email = document.getElementById("email").value;
   let portFolio = document.getElementById("portFolio").value;

   let objective = document.getElementById("objective").value;
   let education = document.getElementById("education").value;

   let work1 = document.getElementById("work1").value;
   let work2 = document.getElementById("work2").value;
   let work3 = document.getElementById("work3").value;

   myPage="";
   
   myPage = "<html lang=\"en\">\n";
   myPage += "\n<meta charset=\"UTF-8\">\n<title>Your Resume</title>";
   myPage += "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">";

   myPage += "<div class=\"r_header\">";
   myPage += "<h1><b>" + name + "</b></h1>";
   myPage += "_______________<br><br>***resume objective***";
   myPage += "<hr></div></head>";

   myPage += "<body>";
   myPage += "<div class=\"column left\" ;>";
   myPage += "<center><b>RESUME OBJECTIVE</b></center><br><br>";
   myPage += objective;

   myPage += "<br><br><br>";
   myPage += "<center><b>Education</b></center><br>";
   myPage += "School:<br>";
   myPage += education;

   myPage += "<br><br><br>";
   myPage += "<center><b>Work Experience</b></center><br>";
   myPage += "Company:<br>";
   myPage += "startdate - enddate<br>";
   myPage += work1;

   myPage += "<br><br><br>";
   myPage += "<center><b>Work Experience</b></center><br>";
   myPage += "Company:<br>";
   myPage += "startdate - enddate<br>";
   myPage += work2;
   
   myPage += "<br><br><br>";
   myPage += "<center><b>Work Experience</b></center><br>";
   myPage += "Company:<br>";
   myPage += "startdate - enddate<br>";
   myPage += work3;
   
   myPage += "<br><br><br>";
   myPage += "<center><b>References</b></center><br>";
   myPage += "Name:<br>";
   myPage += references;



myPage += "</div></body></html>"
   
   newWindow = window.open("", "Resume", "width=400", "height= 400");
   newWindow.document.write(myPage);
}