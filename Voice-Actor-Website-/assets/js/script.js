{
  $("p.contact-nav-font-size").text("StephenK@fakemail.com");
 
 $("p.pt-4.contact-nav-font-size").text("0754456626");

 
  
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop >700) {
    document.getElementById("TopBtn").style.display = "block";
  } else {
    document.getElementById("TopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp