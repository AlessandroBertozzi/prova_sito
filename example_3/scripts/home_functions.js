



function open_menu() {
  if (document.getElementById("blocks-navbar").style.display === "none" || document.getElementById("blocks-navbar").style.display === "") {
      document.getElementById("blocks-navbar").style.display = "flex";
      document.getElementById("Navbar").style.color = "black";
    }

    else {
      document.getElementById("blocks-navbar").style.display = "none";
  }}



  $("#close_menu").click(function(){
    open_menu();
    
  })


  number_slide = 1;
  $(".arrow" ).click(function() {
    console.log(number_slide);

    if (number_slide < 3) {
      number_slide = number_slide + 1;
    $("#background-image-" + number_slide)[0].scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
  });
}
  else if (number_slide == 3) {
    number_slide = 1;

    $("#background-image-" + number_slide)[0].scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
    })
  }
  });




    
    
    $('#main').on('wheel', function() {
      var h = window.innerHeight;
      var intElemScrollTop = document.getElementById('main').scrollTop;
      var intvalue = Math.round( intElemScrollTop );

      var ciao = intvalue / h;

      number_slide = Math.round(ciao + 1);
      
      console.log(number_slide);

  
      })

      $('#main').on('ontouchmove', function() {
        var h = window.innerHeight;
        var intElemScrollTop = document.getElementById('main').scrollTop;
        var intvalue = Math.round( intElemScrollTop );
  
        var ciao = intvalue / h;
  
        number_slide = Math.round(ciao + 1);
        
        console.log(number_slide);
  
    
        })



