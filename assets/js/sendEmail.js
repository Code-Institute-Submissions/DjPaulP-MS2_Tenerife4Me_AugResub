function sendMail(contactForm){
    emailjs.send("service_92vmsff","Tenerife4Me", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            location.reload();
            alert('Your message has been received. We will get back to you as soon as possible');
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}

function sendNews(newsForm){
    emailjs.send("service_92vmsff","newsletter", {
        "from_name": newsForm.name.value,
        "from_email": newsForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            location.reload();
            alert('You have been signed up to our Newsletter. You will recevied your first one within 24 hours');
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}