var modal = document.getElementById('SimpleModal');

var button = document.getElementById('modalBtn');

var Closebtn = document.getElementsByClassName('Closebtn')[0];

var loginbtn = document.getElementById('submit-login');
var signupbtn = document.getElementById('submit-signup');

modalBtn.addEventListener('click', openModal);

function openModal(){
  modal.style.display = 'block';

};
Closebtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display ='none';

};
$(function(){

      $('.login').submit(function (event) {
        event.preventDefault();
        $('#name').val();
        $('#email').val();
        $('#username').val();

        $('#SimpleModal').hide();
      });

)};
