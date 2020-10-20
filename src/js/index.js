import '../style/main.scss';

$(document).ready(function() {

  $(window).scroll(function() {
    if ($("body,html").scrollTop() > 100) {
      $(".scrollTo").fadeIn()
    } else {
      $(".scrollTo").fadeOut()
    }
  });

  $(".scrollTo").click(function() {
    $("body,html").animate({scrollTop: 0}, 700)
  })
})
