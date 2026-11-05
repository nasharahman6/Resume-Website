
$(document).ready(function() {

    // Highlight active navigation link
    let currentPage = window.location.pathname.split("/").pop();

    $(".nav-links a").each(function() {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active");
        }
    });

    // Welcome message
    console.log("Welcome to My Personal Website!");
    
    // Contact Form Functionality

    $("#contactForm").submit(function(event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        if (name === "" || email === "" ||
            subject === "" || message === "") {

            $("#formMessage").text(
                "Please fill in all the fields."
            );

            return;
        }

        let mailSubject = encodeURIComponent(subject);

        let mailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message
        );

        let mailLink =
            "mailto:nasharahman6@gmail.com" +
            "?subject=" + mailSubject +
            "&body=" + mailBody;

        $("#formMessage").text(
            "Opening your email application..."
        );

        window.location.href = mailLink;

    });


});
