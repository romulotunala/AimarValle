let change;
let element = document.querySelectorAll(".job__containerImages");
let slideIndex = 1;

const codSlider = function (){
	if(window.innerWidth <= '576'){
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
		}		
	}else if(window.innerWidth > '576'){
		let i;
		for(i = 0;i < element.length;i++){
			element[i].classList.remove('slider');
			element[i].style.display = "block";
		}
	}
};

codSlider();

function resize(){
	codSlider()
};
