  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var header = $('header').outerHeight(true);
    var footer = $('footer').outerHeight(true);
    
 //余白の調整
 
    if (w > 600) {
      $('body,.link').css('padding-top', header + 'px');
      $('.link').css('margin-top', -header + 'px');
      $('#leftcolumn').css('top', header + 'px');
      $('#leftcolumn').css('padding-bottom', header + footer + 'px');
      $('body').css('padding-bottom', footer + 'px');
    } else {
      $('body,.link').css('padding-top', '0');
      $('.link').css('margin-top', '0');
      $('#leftcolumn').css('top', '');
      $('#leftcolumn').css('padding-bottom', '');
      $('body').css('padding-bottom', '0');
      $('#wrapper').css('padding-bottom', footer + 'px');
    }
  });
