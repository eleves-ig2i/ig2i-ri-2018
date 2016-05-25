
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(function(){
  collapseNavbar();

  $('.pack-button').click(function(){
    $('.success-message').hide();
    color = $(this).data('color');
    pack = $(this).data('type')
    $('.form-button').css('background', color).css('border-color',color);
    $('.form-info').css('color', color);
    $('#job option').each(function(){
      if (pack == $(this).val())
        $(this).prop('selected', true);
      });
      $('.form').fadeIn();
      $('html, body').animate({
        scrollTop: $("#form").offset().top - 100
    }, 500);
  })

  $('.startup-button').click(function(){
    $('.startup-pricing').slideToggle();
    $('html, body').animate({
      scrollTop: $(".startup-pricing").offset().top - 100
    }, 500);
  })

  $('.form-button').click(function(){
    if ($('#email').val() != '') {
      var data = {
        'email': $('#email').val(),
        'company': $('#company').val(),
        'name': $('#name').val(),
        'infos': $('#infos').val(),
        'pack': $('#job option:selected').val(),
        'telephone': $('#telephone').val()
      }
      $.ajax({
        url: "../mailer.php",
        data: data,
        method: "POST",
        dataType: "json",
        success: function(data){
          console.log(data);
          $('.form').hide();
          $('.success-message').show();
        }
      });
    }
  })


  });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.member').hover(function(){
      $(this).find('.member-description').fadeIn();
    })
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
