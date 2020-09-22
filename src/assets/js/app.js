
(function($){
    $(function(){
      
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.sidenav').open();
      $('.tabs').tabs(); 
      $('.materialboxed').materialbox();
      $(".dropdown-trigger").dropdown();
      
    });
       
  })(jQuery); 
  $(document).ready(function(){
    $('select').formSelect();
    
  });

  $(document).ready(function(){
    $('.carousel').carousel({
      indicators: true,
      //dist:-60,
      numVisible: 6,
      onCycleTo: true
    });
  });
  
  
var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});
