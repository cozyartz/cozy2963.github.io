// $(document).ready(function){});

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
