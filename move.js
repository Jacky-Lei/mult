$(function (){
  $('a').on('click', function (e) {
    e.preventDefault();
    var currentAttrValue = $(this).attr('href');
    $(currentAttrValue).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  });
});
