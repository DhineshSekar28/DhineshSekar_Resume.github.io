$(function () {
  // dropdwon menu on hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
   
  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // scroll to top
  $('#scrolltop').click(function () {
    $('html,body').animate({ scrollTop: $('#top').offset().top }, '1000')
    return false
  })

  // contact form and advertise form submission
  var contactForm = $('#contactForm')
  if (contactForm) {
    contactForm.show('fast')
    $("#subject").change(function(){
      $("#emailsubject").val('TemplateFlip.com ' + $("#inquiryType").val() + ' - ' + $("#subject").val())
    })
    $('#inquiryType').change(function(){
      $("#emailsubject").val('TemplateFlip.com ' + $("#inquiryType").val() + ' - ' + $("#subject").val())
    })
  }

  //buy license URL based on license selected
  $('.license_radio').click(function(){
    if ($(this).is(':checked'))
    {
        if($(this).data('url')) {
          // gumroad
          $('.license_buy_url').attr('href', $(this).data('url'))
        }
        if($(this).data('product')) {
          //paddle
          $('.license_option_button').attr('data-product', $(this).data('product'))
        }
    }
  }); 

})

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#scrolltop:hidden')
      .stop(true, true)
      .fadeIn()
  } else {
    $('#scrolltop')
      .stop(true, true)
      .fadeOut()
  }
})
