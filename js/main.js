const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}


$(document).ready(function() {

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /* CLICK EVENT ON TOGGLE MENU */
  $toggleCollapse.click(function() {
    $nav.toggleClass('collapse');
  })

  // Owl-Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });

  // Click to scroll up
  $('.move-up span').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }), 1000;
  })

  /********** BLOG LINKS *******/
  /**** carousel links *********/
  $('.fat-kid').click(function(){
    window.location = "https://nckmartnez.medium.com/as-a-fat-kid-1aea213b5480"; 
  })
  $('.hot-dog').click(function(){
    window.location = "https://nckmartnez.medium.com/costco-hot-dog-or-die-ab718d1e820f"; 
  })
  $('.truth-is').click(function(){
    window.location = "https://nckmartnez.medium.com/who-i-was-in-high-school-based-on-truth-is-posts-78ba05584d2"; 
  })
  $('.name-issues').click(function(){
    window.location = "https://nckmartnez.medium.com/some-issues-with-my-name-e77c9614a4a6"; 
  })
  /***X*** carousel links ***X***/

  /******* regular blog **********/
  $('.time-mag').click(function(){
    window.location = "https://nckmartnez.medium.com/my-2020-person-of-the-year-c41a6e0186a4"; 
  })
  $('.bet-lines').click(function(){
    window.location = "https://nckmartnez.medium.com/betting-lines-for-your-spotify-top-artist-57cfce78026f"; 
  })
  $('.top-room').click(function(){
    window.location = "https://nckmartnez.medium.com/ranking-my-top-10-roommates-1be918cbdaef"; 
  })
  $('.dodgers-ws').click(function(){
    window.location = "https://nckmartnez.medium.com/the-los-angeles-dodgers-are-2020-world-series-champions-7058cb0f95e0"; 
  })
  /***X*** regular blog *****X****/
  /****X***** BLOG LINKS ******X******/
});

// Category Clicks
$('.category').click(function(){
  window.location = "https://nckmartnez.medium.com"; 
})

// Popular Tag Clicks
$('.popular-tags').click(function(){
  window.location = "https://nckmartnez.medium.com"; 
})