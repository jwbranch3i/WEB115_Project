
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

   let skill1 = document.getElementById("skill1").value;
   let skill2 = document.getElementById("skill2").value;
   let skill3 = document.getElementById("skill3").value;

   let tskill1 = document.getElementById("tskill1").value;
   let tskill2 = document.getElementById("tskill2").value;
   let tskill3 = document.getElementById("tskill3").value;


   let references = document.getElementById("references").value;

   myPage="";
   
   myPage = "<html lang=\"en\">";
   myPage += "<head><meta charset=\"UTF-8\"><title>Your Resume</title>";
   myPage += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">";

   myPage += "<div class=\"r_header\">";
   myPage += "<h1><b>" + name + "</b></h1>";
   myPage += "_______________<br><br>***resume objective***";
   myPage += "<hr></div></head>";

   myPage += "<body>";

   myPage += "<div class=\"";
   myPage += " column left\" ;>";
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
   myPage += references + "</div>";

   myPage += "<div class=";
   myPage += "\"column right\" ;>";
   myPage += email + "<br>";
   myPage += phone + "<br>";
   myPage += street +"<br>";
   myPage += city + ", " + state +"<br>" + zip + "<br>";
   myPage += portFolio;

   myPage += "<h2>SKILLS</h2>";
   myPage += skill1 + "<br>";
   myPage += skill2 + "<br>";
   myPage += skill3 + "<br>";

   myPage += "<h2>TECH SKILLS</h2>";
   myPage += tskill1 + "<br>";
   myPage += tskill2 + "<br>";
   myPage += tskill3 + "<br>";


   myPage += "</div></body></html>"
   
   newWindow = window.open("", "Resume", "width=400", "height= 400");
   newWindow.document.write(myPage);
}