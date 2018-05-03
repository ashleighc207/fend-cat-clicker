let clicks = document.querySelectorAll('.h1-container');
let img = document.querySelectorAll('.img');
let clickCount = [0, 0];



img[0].addEventListener('click', function(){
	clickCount[0]++;
	clicks[0].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[0]}</h1>
	`;
});

img[1].addEventListener('click', function(){
	clickCount[1]++;
	clicks[1].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[1]}</h1>
	`;
});

