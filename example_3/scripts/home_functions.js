



function open_menu() {
  if (document.getElementById("blocks-navbar").style.display === "none" || document.getElementById("blocks-navbar").style.display === "") {
      document.getElementById("blocks-navbar").style.display = "flex";
      document.getElementById("Navbar").style.backgroundColor = "rgb(197,223,11)";
      document.getElementById("open_menu").style.visibility = "hidden";
    }

    else {
      document.getElementById("blocks-navbar").style.display = "none";
      document.getElementById("Navbar").style.backgroundColor = "transparent";
      document.getElementById("Navbar").style.backgroundColor = "rgb(128, 128, 128, 0.8)";
  }}



  $("#close_menu").click(function(){
    open_menu();
    
  })


/*----------------CHANGE_YEAR------------------*/







    $(document).on ("click", ".drop-nav", function(e) {
      e.preventDefault()
      // don't allow the event to fire horizontally or vertically up the tree
      e.stopImmediatePropagation()
      // switch the active class that you can use to display the child
      $(this).toggleClass('active')
    })



