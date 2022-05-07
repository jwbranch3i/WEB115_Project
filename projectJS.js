function fixDate(theDate) {
   let newDate = "";

   newDate = theDate.substring(5, 7) + "\\";
   newDate += theDate.substring(8) + "\\";
   newDate += theDate.substring(0, 4);

   return newDate;
}

function checkEmail() {
   var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if (document.getElementById("email").value.match(emailformat)) {
      doResume();
   } else {
      alert("Please enter a valid email address!");
      document.getElementById("email").focus();
   }
}

function doResume() {
   var myPage;
   let name = document.getElementById("name").value;
   let street = document.getElementById("street").value;
   let city = document.getElementById("city").value;
   let state = document.getElementById("state").value;
   let zip = document.getElementById("zip").value;
   let phone = document.getElementById("phone").value;
   let email = document.getElementById("email").value;
   let portFolio = document.getElementById("portFolio").value;

   let objective = document.getElementById("objective").value;
   let objDetail = document.getElementById("objDetail").value;
   let education = document.getElementById("education").value;

   let work1 = document.getElementById("work1").value;
   let work2 = document.getElementById("work2").value;
   let work3 = document.getElementById("work3").value;

   let startDate1 = document.getElementById("startDate1").value;
   let endDate1 = document.getElementById("endDate1").value;
   let startDate2 = document.getElementById("startDate2").value;
   let endDate2 = document.getElementById("endDate2").value;
   let startDate3 = document.getElementById("startDate3").value;
   let endDate3 = document.getElementById("endDate3").value;

   let skill1 = document.getElementById("skill1").value;
   let skill2 = document.getElementById("skill2").value;
   let skill3 = document.getElementById("skill3").value;

   let tskill1 = document.getElementById("tskill1").value;
   let tskill2 = document.getElementById("tskill2").value;
   let tskill3 = document.getElementById("tskill3").value;

   let references = document.getElementById("references").value;

   myPage = "";

   myPage = '<html lang="en">';
   myPage += '<head><meta charset="UTF-8"><title>Your Resume</title>';
   myPage += '<link rel="stylesheet" type="text/css" href="style.css">';

   myPage += '<div class="r_header">';
   myPage += "<h1><b>" + name + "</b></h1>";
   myPage += "_______________<br><br>";
   myPage += objective;
   myPage += "<hr></div></head>";

   myPage += "<body>";

   myPage += '<div class="';
   myPage += 'column left" ;>';
   myPage += "<center><b><u>RESUME OBJECTIVE</u></b></center><br>";
   myPage += objective + ": <br>" + objDetail;

   myPage += "<br><br><br>";
   myPage += "<center><b><u>Education</u></b></center><br>";
   myPage += "School:<br>";
   myPage += education;

   myPage += "<br><br><br>";
   myPage += "<center><b><u>Work Experience</u></b></center><br>";
   myPage += "Company:<br>";
   myPage += fixDate(startDate1) + " - " + fixDate(endDate1) + "<br>";
   myPage += work1;

   if (work2 !== "") {
      myPage += "<br><br><br>";
      myPage += "<center><b><u>Work Experience 2</u></b></center><br>";
      myPage += "Company:<br>";
      myPage += fixDate(startDate2) + " - " + fixDate(endDate2) + "<br>";
      myPage += work2;
   }

   if (work3 !== "") {
      myPage += "<br><br><br>";
      myPage += "<center><b><u>Work Experience 3</u></b></center><br>";
      myPage += "Company:<br>";
      myPage += "startdate - enddate<br>";
      myPage += fixDate(startDate3) + " - " + fixDate(endDate3) + "<br>";
      myPage += work3;
   }

   myPage += "<br><br><br>";
   myPage += "<center><b><u>References</u></b></center><br>";
   myPage += "Name:<br>";
   myPage += references + "</div>";

   myPage += "<div class=";
   myPage += '"column right" ;>';
   myPage += email + "<br>";
   myPage += phone + "<br>";
   myPage += street + "<br>";
   myPage += city + ", " + state + "<br>" + zip + "<br>";
   myPage += portFolio;

   myPage += "<h2>SKILLS</h2>";
   myPage += skill1 + "<br>";
   myPage += skill2 + "<br>";
   myPage += skill3 + "<br>";

   myPage += "<h2>TECH SKILLS</h2>";
   myPage += tskill1 + "<br>";
   myPage += tskill2 + "<br>";
   myPage += tskill3 + "<br>";

   myPage += "</div></body></html>";

   var newWindow = window.open("", "Resume", "width=400", "height= 400");
   newWindow.document.write(myPage);
}
