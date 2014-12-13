
var bio = {
	'name' : 'Ken Pritchard',
	'role' : 'Software Engineer',
	'contacts' : {
		'mobile' : '407-221-6200',
		'email' : 'kendotnet33@gmail.com',
		'github' : 'kendotnet',
		'twitter' : 'kendotnet',
		'location' : 'Honolulu'
	},
	'welcomeMessage' : 'Hi, welcome to the lab.',
	'skills' :  [ 'Front End', 'Middleware', 'Back End' ],
	'bioPic' : 'images/fry.jpg'
};
var education = {
	'schools' : [
		{
			'name' : 'UCF',
			'location' : 'Orlando',
			'degree' : 'BS',
			'majors' : ['CS'],
			'dates' : 2006,
			'url' : 'http://www.ucf.edu'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'JavaScipt',
			'school' : 'Udacity',
			'dates' : 2014,
			'url' : 'http://www.udacity.com/course/ud804'
		},
		{
			'title' : 'Android',
			'school' : 'Coursera',
			'dates' : 2014,
			'url' : 'https://www.coursera.org/'
		}
	]
};
var projects = {
	'projects' : [
		{
			'title' : 'Big Project',
			'dates' : 'November 2014',
			'description' : 'Project that ended world hunger and achieved peace in the middle east.',
			'images' : [
				'images/197x148.gif',
				'images/197x148.gif'
			]
		},
		{
			'title' : 'Small Project',
			'dates' : 'January 2014',
			'description' : 'Reminder app so that birthdays are remembered.',
			'images' : [
				'images/197x148.gif',
				'images/197x148.gif'
			]
		}
	]
};
var work = {
	'jobs' : [
		{
			'employer' : 'Capco',
			'title' : 'Software Engineer',
			'location' : 'Maitland, FL',
			'dates' : 'November 2012 - Present',
			'description' : 'Attend meetings and make sure nothing actually gets done.'
		},
		{
			'employer' : 'HP',
			'title' : 'Java Developer',
			'location' : 'Orlando, FL',
			'dates' : 'May 2012 - November 2012',
			'description' : 'Ensure that the development and deployment process remains sufficiently complicated that I appear to be a genius for being able to navigate it.'
		}
	]
};

bio.display = function() {
	$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
	$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
	if(bio.contacts.generic) {
		$('#topContacts').append(HTMLcontactGeneric.replace('%data%', bio.contacts.generic));
		$('#footerContacts').append(HTMLcontactGeneric.replace('%data%', bio.contacts.generic));
	}
	if(bio.contacts.mobile) {
		$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
		$('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
	}
	if(bio.contacts.email) {
		$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
	}
	if(bio.contacts.twitter) {
		$('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
		$('#footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
	}
	if(bio.contacts.github) {
		$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
	}
	if(bio.contacts.blog) {
		$('#topContacts').append(HTMLblog.replace('%data%', bio.contacts.blog));
		$('#footerContacts').append(HTMLblog.replace('%data%', bio.contacts.blog));
	}
	if(bio.contacts.location) {
		$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
		$('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
	}
	$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
	$('#header').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));

	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for(skill in bio.skills) {
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
		}
	}
};

education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[school].name) + HTMLschoolDegree.replace('%data%', education.schools[school].degree));
		$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
		$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
		if(education.schools[school].majors.length > 0) {
			for(major in education.schools[school].majors) {
				$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
			}
		}
	}
	if(education.onlineCourses.length > 0) {
		$('#education').append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title) + HTMLschoolDegree.replace('%data%', education.onlineCourses[course].school));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates));
			$('.education-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[course].url));
		}
	}
};

projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[project].title));
		$('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[project].dates));
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));
		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[project].images[image]));
			}
		}
	}
};

work.display = function() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title));
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
		$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
	}
};

bio.display();
education.display();
projects.display();
work.display();

$('#mapDiv').append(googleMap);
