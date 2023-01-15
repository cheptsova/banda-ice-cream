// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("footer-scrolltop").style.display = "block";
    } else {
        document.getElementById("footer-scrolltop").style.display = "none";
    }
   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
document.getElementById("footer-scrolltop").addEventListener("click", topFunction);