var wow = new WOW(
  {
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


$(document).ready(function () {


  $('header a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('#gototop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#gototop').fadeIn(500);
    }
    else {
      $('#gototop').fadeOut(500);
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {

      $('.logo').css("width", "40px");
      $('.logo').css("height", "40px");
      $('.logo').css("top", "22%");
      $('.logo').css("transition", "all 0.8s");
      $('.logo p').css("top", "19%");
      $('.logo p').css("left", "24%");
      $('.logo p').css("transition", "all 0.8s");
      $('.belkaGorna').css("box-shadow", "0 6px 6px -6px white");

    } else {
      $('.logo').css("width", "50px");
      $('.logo').css("height", "50px");
      $('.logo').css("top", "15%");
      $('.logo').css("transition", "all 0.8s");
      $('.logo p').css("top", "25%");
      $('.logo p').css("left", "31%");
      $('.logo p').css("transition", "all 0.8s");
      $('.belkaGorna').css("box-shadow", "0 6px 6px -6px black");
    }
  });

  if (screen.width < 860) {
    $(".content a").css("display", "-webkit-inline-box")
  }
  else {
    $(".content").mouseenter(function () {
      console.log($(this.children));

      // $(this).find('button').css("display","inline-block");
      $(this).find('a').fadeIn("slow");

    });

    $(".content").mouseleave(function () {
      // $(this).find('button').css("display","none");
      $(this).find('a').fadeOut("slow");
    });
  }


});

jQuery(document).ready(function () {
  jQuery('#menuToggle').click(function () {
    jQuery('#menuToggle').toggleClass('open');
    if (jQuery('#menuToggle').hasClass('open')) {
      jQuery('.nav').addClass('open');
    } else {
      jQuery('.nav').removeClass('open');
    }
  });
});


$(window).scroll(function () {
  if ($(window).scrollTop() > 1000) {

    asec = 500;
    $("#javascript").addClass("javascript");
    $("#javascript .procent").addClass("opacityAnim");
    $("#javascript .procent").css("display","block");

    setTimeout(function () {
      $("#html").addClass("html");
      $("#html .procent").addClass("opacityAnim");
      $("#html .procent").css("display","block");
    }, asec * 1);
    setTimeout(function () {
      $("#css").addClass("css");
      $("#css .procent").addClass("opacityAnim");
      $("#css .procent").css("display","block");
    }, asec * 2);
    setTimeout(function () {
      $("#sql").addClass("sql");
      $("#sql .procent").addClass("opacityAnim");
      $("#sql .procent").css("display","block");
    }, asec * 3);
    setTimeout(function () {
      $("#bootstrap").addClass("bootstrap");
      $("#bootstrap .procent").addClass("opacityAnim");
      $("#bootstrap .procent").css("display","block");
    }, asec * 4);
    setTimeout(function () {
      $("#jquery").addClass("jquery");
      $("#jquery .procent").addClass("opacityAnim");
      $("#jquery .procent").css("display","block");
    }, asec * 5);
    setTimeout(function () {
      $("#reactJS").addClass("reactJS");
      $("#reactJS .procent").addClass("opacityAnim");
      $("#reactJS .procent").css("display","block");
    }, asec * 6);
    setTimeout(function () {
      $("#git").addClass("git");
      $("#git .procent").addClass("opacityAnim");
      $("#git .procent").css("display","block");
    }, asec * 7);
    setTimeout(function () {
      $("#photoshop").addClass("photoshop");
      $("#photoshop .procent").addClass("opacityAnim");
      $("#photoshop .procent").css("display","block");
    }, asec * 8);


  }
});
