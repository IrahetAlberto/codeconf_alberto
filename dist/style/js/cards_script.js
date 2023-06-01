const speakerCards = document.querySelectorAll('.speaker_card');

speakerCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});


//->> jQuery
//$(function(){
//  $('.speaker').on('click', function(event){
//    event.preventDefault();
//    $(this).toggleClass('speaker-active');
//  });
//});
