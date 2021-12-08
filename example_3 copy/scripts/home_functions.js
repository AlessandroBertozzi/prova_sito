



function open_menu() {
  if (document.getElementById("blocks-navbar").style.display === "none" || document.getElementById("blocks-navbar").style.display === "") {
      document.getElementById("blocks-navbar").style.display = "flex";
      document.getElementById("Navbar").style.backgroundColor = "white";
      document.getElementById("Navbar").style.color = "#c8d300";
      document.getElementById("close_menu").style.visibility = "visible";
      document.getElementById("open_menu").style.visibility = "hidden";
    }

    else {
      document.getElementById("blocks-navbar").style.display = "none";
      document.getElementById("Navbar").style.color = "white";
      document.getElementById("close_menu").style.visibility = "hidden";
      document.getElementById("open_menu").style.visibility = "visible";
  }}



  $("#menu").click(function(){
    open_menu();
    
  })


  $("#Navbar").on("mouseover", function () {
    document.getElementById("logo").src = "Logo_300x120px_verde.png";
    document.getElementById("Navbar").style.backgroundColor = "white";
    document.getElementById("Navbar").style.color = "#c8d300";
});

$("#Navbar").on("mouseout", function () {
  if (document.getElementById("blocks-navbar").style.display !== "flex") {
    document.getElementById("logo").src = "Logo_300x120px_bianco.png";
    document.getElementById("Navbar").style.backgroundColor = "transparent";
    document.getElementById("Navbar").style.color = "white";
  }


});








//////-----------Background slides-----------//////

function switchBackground (number_slide) {
  $("#background-image-" + number_slide)[0].scrollIntoView({
    behavior: "smooth", // or "auto" or "instant"
    block: "start" // or "end"
  });
}


function poisitionFunction () {
  var h = window.innerHeight;
  var intElemScrollTop = document.getElementById('main').scrollTop;
  var intvalue = Math.round( intElemScrollTop );


  var position = (intvalue + h) / h;
  number_slide = Math.round(position + 1);


  console.log(intvalue);




  return number_slide;



}


function Motion() {
  number_slide = poisitionFunction();

    if (number_slide == 4) {
      number_slide = 1
    };

  switchBackground(number_slide);
  
};


  $("#icon").click(function() {
    Motion();

    })






    









        