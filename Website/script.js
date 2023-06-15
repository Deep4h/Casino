// Get the username and number of users online from the server
var username = "Mark";
var usersOnline = 10;

document.getElementById("header-username").innerHTML = username;

// Update the text of the welcome back button and the users online count
document.getElementById("username").innerHTML = username;
document.getElementById("users-online").innerHTML = usersOnline;

var $j = jQuery.noConflict();

$j(document).ready(function() {
  $j('.carousel').carousel({
    interval: 5000
  });
});

$j(document).ready(function() {
    var firstImage = $j('#myCarousel .carousel-item:first-child img');
    var imageHeight = firstImage.height();
    var imageWidth = firstImage.width();
    $j('#myCarousel').css('height', imageHeight);
    $j('#myCarousel .carousel-item').css('height', imageHeight);
    $j('#myCarousel').css('width', imageWidth);
    $j('#myCarousel .carousel-item').css('width', imageWidth);
  });

var balance = 100.00;
var balanceValue = document.querySelector('.balance-value');
balanceValue.textContent = '$' + balance.toFixed(2);

const notificationButton = document.querySelector('.notification-button');
const notificationBox = document.querySelector('.notification-box');

notificationButton.addEventListener('click', () => {
  notificationBox.classList.toggle('show');
});

const chatToggle = document.querySelector('.chat-toggle');
const chat = document.querySelector('.chat');

chatToggle.addEventListener('click', () => {
  chat.classList.toggle('collapsed');
  chatToggle.classList.toggle('collapsed');
  if (chat.classList.contains('collapsed')) {
    chatToggle.innerHTML = '<i class="fa fa-chevron-left"></i>';
  } else {
    chatToggle.innerHTML = '<i class="fa fa-chevron-right"></i>';
  }
});

document.querySelector('.chat-toggle').addEventListener('click', function() {
  document.querySelector('.main-container').classList.toggle('chat-open');
});

const menuLink = document.getElementById('menu-link');
const menuPopup = document.getElementById('menu-popup');
const profilePage = document.getElementById('profile-page');
const aboutPage = document.getElementById('about-page');
const servicesPage = document.getElementById('services-page');
const contactPage = document.getElementById('contact-page');
const depositPage = document.getElementById('deposit-page');
const withdrawPage = document.getElementById('withdraw-page');

menuLink.addEventListener('click', (event) => {
  event.preventDefault();
  menuPopup.style.display = 'block';
  profilePage.style.display = 'block';
  depositPage.style.display = 'block';
});

menuPopup.addEventListener('click', (event) => {
  if (event.target === menuPopup) {
    menuPopup.style.display = 'none';
  }
});

const pages = {
  'profile': profilePage,
  'about': aboutPage,
  'services': servicesPage,
  'contact': contactPage,
  'deposit': depositPage,
  'withdraw': withdrawPage
};

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-sidebar a');
  menuLinks[0].click();
  menuLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      const currentPage = pages[page];
      const iframes = document.querySelectorAll('.menu-iframe-container iframe');
      iframes.forEach((iframe) => {
        iframe.style.display = 'none';
      });
      currentPage.style.display = 'block';
    });
  });
});



