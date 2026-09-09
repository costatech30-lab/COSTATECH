function sendMessage(e){
  e.preventDefault();
  const form=e.target, name=form.name.value.trim(), email=form.email.value.trim(), subject=form.subject.value, message=form.message.value.trim();
  const body=`Nom : ${name}\nE-mail : ${email}\nObjet : ${subject}\n\nMessage :\n${message}`;
  document.getElementById("form-message").textContent="Votre logiciel de messagerie va s'ouvrir pour envoyer votre demande.";
  window.location.href="mailto:costatech30@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  return false;
}
