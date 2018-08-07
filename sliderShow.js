let change,
	 element = document.querySelectorAll(".job__containerImages"),
	slideIndex = 1;

var selectSlider;

function sliderON(){
	let i;
	for(i = 0;i < element.length;i++){
		element[i].classList.add('slider');
	}

	showDivs(slideIndex);

	change = function (n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    let i;
	    let x = document.getElementsByClassName('slider');

	    if (n > x.length) {slideIndex = 1}; 

	    if (n < 1) {slideIndex = x.length};

	    for (i = 0; i < x.length; i++) {
	        x[i].style.display = "none";
	    }
	    x[slideIndex-1].style.display = "block";
	    x[slideIndex-1].style.width = '90%';
	}
	document.getElementById('job__arrow--back').style.display = 'block';
	document.getElementById('job__arrow--next').style.display = 'block';
}

function sliderOFF(){
	let i;
	for(i = 0;i < element.length;i++){
		element[i].classList.remove('slider');
		element[i].style.display = "flex";
		element[i].style.width = "30%";
	}
	document.getElementById('job__arrow--back').style.display = 'none';
	document.getElementById('job__arrow--next').style.display = 'none';
}

function on_off(value, imgPosition) {
	if (value === 'on') {
		if(imgPosition){
			slideIndex = imgPosition;
		}
		sliderON();
		document.getElementById('job__arrow--back').style.top = '49%';
		document.getElementById('job__arrow--next').style.top = '49%';
		document.getElementById('btn__slider--off').style.display = 'block';
		document.getElementById('btn__slider--on').style.display = 'none';
	}else if(value === 'off'){
		sliderOFF();
		document.getElementById('job__arrow--back').style.top = '100px';
		document.getElementById('job__arrow--next').style.top = '100px';
		document.getElementById('btn__slider--off').style.display = 'none';
		document.getElementById('btn__slider--on').style.display = 'block';
	}
};

const codSlider = function (){
	if(window.innerWidth <= '576'){
		sliderON();	
	}else if(window.innerWidth > '576'){
		sliderOFF();
	}
};

codSlider();

function removeLinkTop(){
	var img = document.querySelectorAll('.job__containerImages');
	
	if(window.innerWidth <= '576'){
		img.forEach(item =>{
			item.classList.remove('linkTop');
		})
	}else if(window.innerWidth > '576'){
		img.forEach(item =>{
			item.classList.add('linkTop');
		})
	}
}

removeLinkTop();

function rescale(){
	removeLinkTop();

	if (window.innerWidth <= '576') {
		codSlider();

	}
};

// scroll

const menuItems = document.querySelectorAll('.linkTop');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
})
 
function scrollToIdOnClick(){
	const id = '#container__imgs'
	const to = document.querySelector(id).offsetTop;

	window.scroll({
		top:to,
		behavior:'smooth',
	});
}