const senderName = document.querySelector('#fullname');
const email = document.querySelector('#emailaddress');
const message = document.querySelector('#projectsummary');
const sendButton = document.querySelector('.btn-secondary');


sendButton.addEventListener('click', (e) => {

    var templateParams = {
        to_name: 'Diogo',
        from_name: `${senderName.value}`,
        message: `${message.value}`,
        from_email: `${email.value}`
    };

    emailjs.send('service_5dilgpo', 'template_9w45wfa', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    e.preventDefault();
    senderName.value = "";
    email.value = "";
    message.value = "";
})