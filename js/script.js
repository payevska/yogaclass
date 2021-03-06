/*window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}*/


window.onload=function(){          
            


// Slider
let sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector('#arrow-left'),
	arrowRight = document.querySelector('#arrow-right'),
	current = 0;

// Clear all images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
	}
}

// Init slider
function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

// Show next
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
	if(current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
	if(current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});

startSlide();


// Menu burger
// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');    
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');    
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

/*

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
*/


}