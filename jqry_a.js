$(function(){
  /*浮動導覽列*/
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　  var $this = $(this);
　　  var $this_Top=$this.scrollTop();
      /*當高度小於10時，關閉區塊*/
　　  if($this_Top < 10){
　　　  $('.top').stop().animate({top:"-65px"});
　　　}
　　　if($this_Top > 10){
　　　　$('.top').stop().animate({top:"0px"});
　　　}
　　}).scroll();
　});
  /*回到頂端鈕*/
  $(".gotop").click(function(){
    jQuery("html,body").animate({
      scrollTop:0
    },1000);
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 100){
      $('.gotop').fadeIn("fast");
    }
    else {
      $('.gotop').stop().fadeOut("fast");
    }
  });
});
