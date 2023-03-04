let scroll;

window.onscroll = function(e) {
    scroll = window.scrollY // Get scroll position
    console.log(scroll);
}

// $(document).ready(function() {

// $('.filters-list a').on('click', function(){

//   var filter = $(this).attr('data-filter');
//   $('.photo').hide();
//   $(filter).show();
//   $('.filters-list a').removeClass('selected');
//   $(this).addClass('selected');

//   return false;
// })

// });