var modal = document.getElementById('SimpleModal');

var linkbtn = document.getElementById('modalBtn');

var Closebtn = document.getElementsByClassName('Closebtn')[0];

var loginbtn = document.getElementById('submit-login');
var signupbtn = document.getElementById('submit-signup');

linkbtn.addEventListener('click', openModal);
function openModal(){
  modal.style.display = 'block';

}
Closebtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display ='none';

}


      $('.login').submit(function (event) {
        event.preventDefault();
        $('#name').val();
        $('#email').val();
        $('#username').val();

        $('#SimpleModal').hide();
      });
