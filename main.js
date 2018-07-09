let change;
let element = document.querySelectorAll(".job__containerImages");
let slideIndex = 1;

var selectSlider;

function sliderON(){
	let i;
	for(i = 0;i < element.length;i++){
		element[i].classList.add('slider');
	}

	showDivs(slideIndex);

	change = function plusDivs(n) {
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

	// document.getElementById('job__containerImages').style.width = '90%';
	
}

function sliderOFF(){
	let i;
	for(i = 0;i < element.length;i++){
		element[i].classList.remove('slider');
		element[i].style.display = "block";
		element[i].style.width = "30%";
	}
	
}


function on_off(value) {
	if (value === 'on') {
		sliderON();
		document.getElementById('job__arrow--back').style.display = 'block';
		document.getElementById('job__arrow--back').style.top = '49%';
		document.getElementById('job__arrow--next').style.display = 'block';
		document.getElementById('job__arrow--next').style.top = '49%';
	}else if(value === 'off'){
		sliderOFF();
		document.getElementById('job__arrow--back').style.display = 'none';
		document.getElementById('job__arrow--back').style.top = '100px';
		document.getElementById('job__arrow--next').style.display = 'none';
		document.getElementById('job__arrow--next').style.top = '100px';
	}
};

const codSlider = function (){
	if(window.innerWidth <= '576'){
		sliderON();
		// let i;
		// for(i = 0;i < element.length;i++){
		// 	element[i].classList.add('slider');
		// }

		// showDivs(slideIndex);

		// change = function plusDivs(n) {
		//     showDivs(slideIndex += n);
		// }

		// function showDivs(n) {
		//     let i;
		//     let x = document.getElementsByClassName('slider');
		//     if (n > x.length) {slideIndex = 1}; 
		//     if (n < 1) {slideIndex = x.length};
		//     for (i = 0; i < x.length; i++) {
		//         x[i].style.display = "none";
		//     }
		//     x[slideIndex-1].style.display = "block";
		// }		
	}else if(window.innerWidth > '576'){
		sliderOFF();
		// let i;
		// for(i = 0;i < element.length;i++){
		// 	element[i].classList.remove('slider');
		// 	element[i].style.display = "block";
		// }
	}
};


codSlider();


function resize(){
	codSlider()
};
