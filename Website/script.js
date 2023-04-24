// Get the username and number of users online from the server
var username = "John";
var usersOnline = 10;

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