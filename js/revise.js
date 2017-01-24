var bio = {
    "name": "Andrea Cozart-Lundin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "734-693-2020",
        "email": "cozy2963@gmail.com",
        "github": "cozy2963",
        "twitter": "@cozy2963",
        "location": "Detroit"
    },
    "welcomeMessage": "Thanks for checking out my info! This is a work in progress.",
    "skills": [
        "HTML", "CSS", "JavaScript", "WordPress", "E-commerce", "Computer Hardware"
    ],
    "biopic": "images/rockstar.png"
};
var education = {
    "schools": [{
        "name": "Schoolcraft College",
        "location": "Livonia, MI",
        "degree": "",
        "majors": ["Aviation Management"],
        "dates": "2013 - 2014",
        "url": "http://www.schoolcraft.edu"
    }, {
        "name": "Baker College",
        "location": "Auburn Hills, MI",
        "degree": "",
        "majors": ["Computer Science"],
        "dates": "2006 - 2007",
        "url": "http://www.baker.edu"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Develoment Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com",
        "skills": "HTML, CSS, JS, JQuery, GitHub"
    }, {
        "title": "Web Developer",
        "school": "Code School",
        "dates": "2015",
        "url": "www.codeschool.com",
        "skills": "Git Path, Ruby on Rails, JavaScript, JQuery"
    }, {
        "title": "The Complete Web Developer Bootcamp with Colt Steele",
        "school": "Udemy",
        "dates": "2015",
        "url": "www.udemy.com/ColtSteel",
        "skills": "HTML, Bootstrap, CSS, JS, JQuery, NodeJS, MongoDB, API"
    }, {
        "title": "The Web Developer Bootcamp with Robeen Dey",
        "school": "Udemy",
        "dates": "2015",
        "url": "www.udemy.com/RobeenDey",
        "skills": "GitHub, HTML, CSS, Ruby on Rails, Stripe, NodeJS"
  }]
};

var work = {
    "jobs": [{
        "employer": "Lanier Brugh",
        "title": "Line-Haul Driver",
        "location": "Seattle, WA",
        "dates": "2013 - 2016",
        "description": "Hauled US mail with 53' trailer and Day-cab"
    }, {
        "employer": "Ruco Transport",
        "title": "Class A CDL Driver / Owner",
        "location": "Wayne, MI",
        "dates": "2005 - 2013",
        "description": "Expedited frieght within the US and Canada"
    }, {
        "employer": "Apple, Inc.",
        "title": "Mac Specialist",
        "location": "Novi, MI",
        "dates": "2007 - 2008",
        "description": "Provided excellent sales and service to everyone"
    }]
};

var projects = {
    "projects": [{
      "title": "JS Meme Maker",
      "dates": "2016",
      "description": "Meme Maker made with JavaScript",
      "images": ["images/meme2.png"]
    },
    {
        "title": "Portfolio Site",
        "dates": "2016",
        "description": "Portfolio Site for an Instructional Designer",
        "images": ["images/elearn.png"]
    },
    {
        "title": "To-Do List",
        "dates": "2015",
        "description": "Simple To-Do list code-along with Colt Steele",
        "images": ["images/todo.png"]
    },
    {
        "title": "JavaScript Drum Kit",
        "dates": "2017",
        "description": "Play the drums on your computer with JS",
        "images": ["images/drum.png"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);


        if (project.images) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });

};
projects.display();

////////////////////skills/bio/////////////////////////////

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRoll = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    // var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header, #footerContacts").append(formattedLocation, formattedEmail, formattedGitHub, formattedTwitter, formattedMobile);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRoll);
    $("#header").prepend(formattedPic);
    $("#header").append(HTMLskillsStart);


    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        console.log(skill);
        $("#skills").append(formattedSkill);
    });
};
bio.display();


/////////////////work////////////////////////////////////

work.display = function() {
    work.jobs.forEach(function(job) {
        console.log(job);
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDescription);



    });
};

work.display();

//////////////////education///////////////////////////////
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        console.log(school);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchool = formattedSchoolName + formattedSchoolLocation  + formattedSchoolMajor + formattedSchoolDates;

        $(".education-entry:last").prepend(formattedSchool);
    });

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(online) {

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
        var formattedOnlineSkills = HTMLonlineSkills.replace("%data%", online.skills);
        var formattedOnline = formattedOnlineSchool + formattedOnlineTitle  + formattedOnlineSkills + formattedOnlineURL + formattedOnlineDates;
        console.log(online);
        $(".education-entry:last").append(formattedOnline);
    });
};
education.display();

///////////////////google map/////////////////////////////
function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));
$("#mapDiv").append(googleMap);

////////////////////////////////projects/////////////////




// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });
