const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_2xlfkj7';
   const templateID = 'template_dvhn5yg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mensaje enviado correctamente!');
      document.getElementById('contact-form').reset(); // Limpiar formulario
    }, (err) => {
      btn.value = 'El email no pudo enviarse';
      alert(JSON.stringify(err));
    });
});

