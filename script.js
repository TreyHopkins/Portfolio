var modal = document.getElementById('SimpleModal');

var linkbtn = document.getElementById('modalBtn');

var Closebtn = document.getElementsByClassName('Closebtn')[0];

var loginbtn = document.getElementById('submit-login');
var signupbtn = document.getElementById('submit-signup');

var frenchbtn = document.getElementById('language-chng');

/*Function that opens the modal*/

linkbtn.addEventListener('click', openModal);
function openModal(){
  modal.style.display = 'block';

}

/*Closes the modal*/

Closebtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display ='none';

}

/*Function that hides the modal upon submission*/

      $('.login').submit(function (event) {
        event.preventDefault();
        $('#name').val();
        $('#email').val();
        $('#username').val();

        $('#SimpleModal').hide();
      });

/*Function that changes the language of the title*/

  function chngText(){
    document.getElementById('main-title').innerHTML='Le Lieu.';
}
  function chngText_1() {
    document.getElementById('main-title').innerHTML='The Place.';
  }

  function chngText_2() {
      document.getElementById('main-title').innerHTML='El Lugar.'
  }

  function chngText_3() {
      document.getElementById('main-title').innerHTML='Der Ort.'
  }
