function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_me028e3";
    const templateID = "template_9v4nhh3";
    
    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent");
    })
    .catch((err) => console.log(err));
}
