


// $('.movieCardCarousel').carousel({
//     interval: 10000
//   })
  
//   $('.carousel .carousel-item').each(function(){
//       var minPerSlide = 6;
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       for (var i=0;i<minPerSlide;i++) {
//           next=next.next();
//           if (!next.length) {
//               next = $(this).siblings(':first');
//             }
          
//           next.children(':first-child').clone().appendTo($(this));
//         }
//   });

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    // number of slides per carousel-item
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})