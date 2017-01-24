
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><i class="fa fa-phone-square" aria-hidden="true"></i><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><i class="fa fa-envelope" aria-hidden="true"></i><a class="email" href="#"><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><i class="fa fa-twitter" aria-hidden="true"></i><a class="twitter" href="#"><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><i class="fa fa-github-alt" aria-hidden="true"></i><a class="github" href="#"><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><i class="fa fa-globe" aria-hidden="true"></i></span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills At A Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%</a>';
var HTMLschoolDegree = '<p>%data%</p>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p>Major: %data%</p>';

var HTMLonlineClasses = '<h2 class="edHead">Online Classes</h2><hr class="here">';
var HTMLonlineTitle = '<p class="class-title">%data%</p>';
var HTMLonlineSchool = '<p class="online-school">%data%</p>';
var HTMLonlineDates = '<div class="date-text">%data%</div><hr class="hrClasses">';
var HTMLonlineSkills = '<p>%data%</p>';
var HTMLonlineURL = '<a class="online-link" href="#">%data%</a>';


var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h4 class= "employer"><a href="#" target="blank">%data%</a></h4>';
var HTMLworkTitle = ' <p id="workTitle">%data%</p>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';


var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="project-date">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
// Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
;var bio = {
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
;// $(document).ready(function){});

$(function() {
   $("a[href^='http']:not([href*='andreacozart.com'])").each(function() {
       $(this).click(function(event) {
             event.preventDefault();
             event.stopPropagation();
             window.open(this.href, '_blank');
        }).addClass('externalLink');
   });
});



$('.education-entry a:first').attr('href', 'http://www.schoolcraft.edu');
$("a:contains('Baker College')").attr('href', 'http://www.baker.edu');
$("a:contains('JS Meme Maker')").attr('href', 'http://www.cozycoder.xyz');
$("a:contains('To-Do List')").attr('href', 'http://www.examplework.xyz');
$("a:contains('Lanier Brugh')").attr('href', 'http://www.brughtrucking.com/');
$("a:contains('Apple')").attr('href', 'http://www.apple.com/');
$("a:contains('codeschool')").attr('href', 'http://www.codeschool.com/');
$("a:contains('udacity')").attr('href', 'https://profiles.udacity.com/u/andreacozartlundin');
$("a:contains('ColtSteel')").attr('href', 'https://www.udemy.com/the-web-developer-bootcamp/');
$("a:contains('RobeenDey')").attr('href', 'https://www.udemy.com/job-ready-web-developer/');
$("a:contains('Portfolio Site')").attr('href', 'http://www.elearnitall.com');
$("a:contains('Drum Kit')").attr('href', 'http://www.cozybox.xyz');
$('.github').attr('href', 'http://www.github.com/cozy2963');
$('.twitter').attr('href', 'https://twitter.com/cozy2963');
$('.email').attr('href', 'mailto:cozy2963@gmail.com');
