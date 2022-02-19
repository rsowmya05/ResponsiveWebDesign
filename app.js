const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

window.onload = function(){ 
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var greet;
    if (hour < 12)
        greet = 'Good Morning, Guest!';
    else if (hour >= 12 && hour <= 17)
        greet = 'Good Afternoon, Guest';
    else if (hour >= 17 && hour <= 24)
        greet = 'Good Evening, Guest';
	var w = 200;
	var h = 100;
	var left = Number((screen.width/2)-(w/2));
	var top = Number((screen.height/6)-(h/2));

	var w =window.open('', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,width=200,height=15, top='+top+', left='+left);			
	w.document.write(greet)
	w.focus()
	setTimeout(function() {w.close();}, 10000)

		
}

//function changeBg(){
	//var color=document.getElementById('hexa').color;
	//	document.body.style.backgroundColor=color;
//}