$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});









function parallax()
{
  var image= document.getElementById('image2');
  image.style.right= (window.pageYOffset/ 5) + 'px';

} 
window.addEventListener("scroll",parallax,false)
