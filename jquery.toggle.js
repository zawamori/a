$(function() {

// アコーディオンメニュー
  $('nav > ul > li,nav > ul > li > a[href^=#]').on('click', function() {
    $(this).children('ul:not(:animated)').slideToggle();
    $(this).children('span').toggleClass('open');
    $('.sub-menu').not($(this).children('.sub-menu')).slideUp();
    $('nav li').children('span').not($(this).children('span')).removeClass('open');
  });
    $('.sub-menu li a[href^=#]').on('click', function(event) {
    event.stopPropagation();
  });

// メニューを開くボタンの動作
  $('#open').click(function() {
    $('#leftcolumn').slideToggle(300);
    $('#side-bg').fadeToggle();
    $('#open').toggleClass('buttonclose');
    $('#open-icon').toggleClass('close');
    return false;
  });

// 小画面時に範囲外を押した場合、一度閉じる
  $('#side-bg').click(function() {
    $(this).fadeOut();
    $('#leftcolumn').slideToggle(300);
    $('#open').removeClass('buttonclose');
    $('#open-icon').removeClass('close');
  });
  
// 小画面時にメニュー内リンクを押した場合、一度閉じる
// ページ内リンク用
  $('#leftcolumn a[href^=#]').on('click', function() {
    if (window.innerWidth <= 600) {
      $('#open').click();
    }
  });

// 小画面時にメニューを閉じてからリサイズするとメニューが表示されないのを防ぐ
  $(window).resize(function() {
    var menu = $('#leftcolumn');
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    w > 600 && menu.is(':hidden') && menu.attr('style', '')
  });

// 画像リンクには装飾しない
  $('img').parent('a').addClass('bg-none');

});