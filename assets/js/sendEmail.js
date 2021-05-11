function sendMail(contactForm){
    emailjs.send("service_92vmsff","Tenerife4Me", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
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
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}