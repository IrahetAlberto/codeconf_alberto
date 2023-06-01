
let speaker_section = document.querySelector(".speaker_section") //écouter un clic sur tout
speaker_section.addEventListener("click", function (e) {// détecter le clic sur l'élément
let mySection = e.target.closest(".speaker_card") //cherche le parent de type "section" de l'élément réellement cliqué
//console.log(mySection.classList)
if(mySection.classList.contains("speaker_card-active")) { //classlist liste des classes à l'élément -> speaker active
  mySection.classList.remove("speaker_card-active")// retire classe
}
  else { // ajout de la classe mais avant vérifier si élément ouvert avant d'ouvrir élement sur lequel on clic
   if(document.querySelector(".speaker_card-active")) {document.querySelector(".speaker_card-active").classList.remove("speaker_card-active")} //si un actif, on le retire
    mySection.classList.add("speaker_card-active")
  } 
})

//->> jQuery
//$(function(){
//  $('.speaker').on('click', function(event){
//    event.preventDefault();
//    $(this).toggleClass('speaker-active');
//  });
//});
