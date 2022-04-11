// const canvas = document.getElementById('matrix');
// const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const nums = '0123456789';
// const cyrillic = 'АБВГДЕЁЖЗИЙІКЛМНОПРСТУФХЦЧШЩЪЫЬѢЭЮЯѲѴ';
// const katakana =
//   'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

// const alphabet = nums + cyrillic + katakana;

// const fontSize = 18;
// const columns = canvas.width / fontSize;

// const rainDrops = [];

// for (let x = 0; x < columns; x++) {
//   rainDrops[x] = 1;
// }

// const draw = () => {
//   context.fillStyle = 'rgba(236, 236, 236, 0.05)';
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   context.fillStyle = '#b2ddc7';
//   context.font = fontSize + 'px monospace';

//   for (let i = 0; i < rainDrops.length; i++) {
//     const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//     context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

//     if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       rainDrops[i] = 0;
//     }

//     rainDrops[i]++;
//   }
// };

// setInterval(draw, 120);

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }),
);

window.onscroll = function () {
  lockHeader();
};

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function lockHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

$(function () {
  $('body').progress_bar();
}),
  (function ($) {
    $.fn.progress_bar = function (options) {
      return this.each(function () {
        $(window).scroll(function (e) {
          e.preventDefault();
          var percent =
            ($(window).scrollTop() /
              ($(document).height() - $(window).outerHeight())) *
            100;
          $('.progress-bar').css('width', percent + '%');
          //$(".ontop").css("width", percent + "%");
        });
      });
    };
  })(jQuery);
