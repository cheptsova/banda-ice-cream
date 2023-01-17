// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const element = document.getElementById("footer-scrolltop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       
    // element.style.display = "block";
    element.style.opacity = "1";
    element.style.transform = "translateY(0px)";
    } else {

    // element.style.display = "none";
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    }

}
// scrollFunction()
// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
document.getElementById("footer-scrolltop").addEventListener("click", topFunction);
