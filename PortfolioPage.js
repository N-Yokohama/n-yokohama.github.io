$(function() {
 
  //ページ内スクロール
  $(".Work").click(function () {
      var i = $(".Work").index(this)
      var p = $(".WorkButtonPage").eq(i).offset().top;
      $('html,body').animate({ scrollTop: p }, 'fast');
      return false;
  });
});