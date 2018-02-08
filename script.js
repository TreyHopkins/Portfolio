var modal = document.getElementById('SimpleModal');

var button = document.getElementById('modalBtn');

var Closebtn = document.getElementsByClassName('Closebtn')[0];

modalBtn.addEventListener('click', openModal);

function openModal(){
  modal.style.display = 'block';

}
Closebtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display ='none';

}
