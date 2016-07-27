//jQuery SHORT HAND FOR DOCUMENT READY
$(function(){
  // SHOW MODAL FUNCTION
  function showModal(){
    // SHOWS THE MODAL
    $('.modal-wrapper').show();
    $('#mainNav').css('display', 'none');
    // ADDES THE MODAL-ON CLASS TO BODY TO PREVENT SCROLLING WHEN THE MODAL IS SHOWN
    $('body').addClass('modal-on');
  }
  // HIDE MODAL function
  function hideModal(){
    // HIDE THE MODAL
    $('.modal-wrapper').hide();
    $('#mainNav').css('display', 'block');
    // REMOVES THE MODAL-ON CLASS
    $('body').removeClass('modal-on');
  }
  // WHEN THE SHOW MODAL BUTTON IS CLICKED PREVENT ANY DEFAULT BEHAVIOR AND RUN THE SHOW MODAL FUNCTION
  $('#showModal').click(function(e){
    e.preventDefault();
    showModal();
  });
  // WHEN THE EXIT/NO BUTTON OR MODAL-WRAPPER(BACKGROUND BEHIND MODAL BOX) IS CLICKED PREVENT ANY DEFAULT BEHAVIOR AND RUN THE HIDE MODAL FUNCTION
  $('.exit, .no, .modal-wrapper').click(function(e){
    e.preventDefault();
    hideModal();
  });
  // WHEN THE YES BUTTON IS CLICKED PREVENT ANY DEFAULT BEHAVIOR AND REDIRECT TO GOOGLE.COM
  $('.yes').click(function(e){
    e.preventDefault();
    window.location = 'http://google.com';
  });
  // STOPS THE MODAL FROM CLOSING WHEN THE MODAL BOX IS CLICKED
  $('.modal').click(function(e){
    e.stopPropagation();
  });
});
