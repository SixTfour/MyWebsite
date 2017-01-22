$('#my-icon').click(function() {
	$('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
});

$('#menu-icon').click(function() {
	$('#tabs').slideToggle("slow", function() {
    // Animation complete.
	});
});

$("#about-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-section").offset().top -100},
        'slow');
    if($(window).width() <= 768) {
	    $('#tabs').slideToggle("fast", function() {
	    // Animation complete.
		});
	}
});

$("#projects-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects-section").offset().top -100},
        'slow');
    if($(window).width() <= 768) {
	    $('#tabs').slideToggle("fast", function() {
	    // Animation complete.
		});
	}
});

$("#experience-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#experience-section").offset().top -100},
        'slow');
    if($(window).width() <= 768) {
	    $('#tabs').slideToggle("fast", function() {
	    // Animation complete.
		});
	}
});

$("#contact-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-section").offset().top -100},
        'slow');
    if($(window).width() <= 768) {
	    $('#tabs').slideToggle("fast", function() {
	    // Animation complete.
		});
	}
});

 function SendLinkByMail(href) {
    var subject = "Interesting Information";
    var body = "I thought you might find this information interesting:\r\n\r\n<";
    body += window.location.href;
    body += ">";
    var uri = "mailto:?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += encodeURIComponent(body);
    window.open(uri);
}