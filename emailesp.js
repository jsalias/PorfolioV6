const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_en6e64d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar e-mail';
      alert('Mensaje enviado!. A la brevedad me pondre en contacto. Muchas Gracias!');
    }, (err) => {
      btn.value = 'Enviar e-mail';
      alert(JSON.stringify(err));
    });
});