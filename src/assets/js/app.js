
(function($){
    $(function(){
      
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.sidenav').open();
      $('.tabs').tabs(); 
      $('.materialboxed').materialbox();
      $(".dropdown-trigger").dropdown();
      $('.slider').slider();
      
    });
       
  })(jQuery); 
  $(document).ready(function(){
    $('select').formSelect();
    
  });


  
  //Carousel banner
  $(document).ready(function(){
    $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 200,
    }
    );
  });
  
  autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }
  $(document).ready(function(){
    $('.slider').slider();
  });
  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });
  
  $('#tmensaje').val('New Text');
  M.textareaAutoResize($('#mensaje'));

  $(document).ready(function() {
    $('input#input_text, textarea#mensaje-inicio').characterCounter();
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 100});
    $('.tooltipped').trigger('mouseleave');
    $('.tooltipped').trigger('needs click');
  });
  
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.tabs').tabs();
  });

