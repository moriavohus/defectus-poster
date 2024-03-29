
// $(function () 
//       {
//         $("#img1").click(function () {
//             console.log("img1")
//             $(".modalbody").css("display", "flex");
//         });

//         $("#back_about").click(function () {
//             $(".about").hide();
//         });
// });



// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.repkabol.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.repkabol')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
 
  // $('#openModal').click(function() {
  //    $('#modal').css({display: 'block'});
  // });
 
  // $('.close').click(function() {
  //    $('#modal').css({display: 'none'});
  // });
 
  // $(window).click(function(event) {
  //    if (event.target == document.querySelector('#modal')) {
  //      $('#modal').css({display: 'none'});
  //    }
  // }); 
 // // $(document).ready(function(){
//   $('.repka2').click(function(){
//     $('.vrotebal').css({display: 'block'})
//     });

//     const modal = document.querySelector('#modal');
//     const btn = document.querySelector('#openModal');
//     const close = document.querySelector('.close');
    
//     btn.onclick = function () {
//       modal.style.display = 'block';
//     };
    
//     close.onclick = function () {
//       modal.style.display = 'none';
//     };
    
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = 'none';
//       }
//     };

// // });








// $(document).ready(function() {
//     console.log('готов!');

//     $(".demo").html("penic");
// 	//тело функции jQuery

//     $(".box").click(function(){
//     $(this).toggleClass("grey")    
//     });

//     $(".add").click(function(){
//         $(".magic").addClass("pink");
//     });

//     $(".remove").click(function(){
//         $(".magic").removeClass("pink");
//     });

//     $(".toggle").click(function(){
//         $(".magic").toggleClass("pink");
//     });

//     $(".korobka").hover(function(){
//         $(".korobka").toggleClass("pink");
//     });

//     $(".korobka").click(function(){
//         $(this).css({
//             width: function(index, value){
//                 return parseFloat(value)+50;
//             },
//             height: function(index, value){
//                 return parseFloat(value)+20;
//             }
//         })
//     });

//     $(".blue").click(function(){
//         $(".pink").toggleClass("block")
//     });

//     $(".green").click(function(){
//         setTimeout(function(){
//             $(".blue").toggleClass("block");
        
//         }, 100);
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     console.log('готов!');
//     document.getElementById("penic").innerHTML= "penif";

//     let element = document.querySelectorAll(".ultra");
//     element.forEach(function(p){
//         p.innerHTML = "piska";
//         p.style.backgroundColor= "pink";

//     })
// 		// на Javascript
//     // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
//     // Это как Document ready, только для vanila js 

// });


