const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



window.onscroll = function() {lockHeader()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function lockHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(function()
{
    $("body").progress_bar();
}),

(function($)
{
    $.fn.progress_bar = function(options)
    {
        return this.each(function()
        {
            $(window).scroll(function(e)
            {
                e.preventDefault();
                var percent = (($(window).scrollTop() / ($(document).height() - $(window).outerHeight())) * 100);
                $(".progress-bar").css("width", percent + "%");
                //$(".ontop").css("width", percent + "%");
            });
        });
    };
})(jQuery);