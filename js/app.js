let clicks = document.querySelectorAll('.h1-container');
let img = document.querySelectorAll('.img');
let cats = document.querySelectorAll('.cat-box');
let toggleSwitch = document.querySelectorAll('.toggle');
let clickCount = [0, 0, 0, 0, 0];


img[0].addEventListener('click', function(){
	clickCount[0]++;
	clicks[0].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[0]}</h1>
	`;
});

toggleSwitch[0].addEventListener('click', function(){
	cats[0].classList.toggle('display-none');
});

img[1].addEventListener('click', function(){
	clickCount[1]++;
	clicks[1].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[1]}</h1>
	`;
});

toggleSwitch[1].addEventListener('click', function(){
	cats[1].classList.toggle('display-none');
});

img[2].addEventListener('click', function(){
	clickCount[2]++;
	clicks[2].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[2]}</h1>
	`;
});

toggleSwitch[2].addEventListener('click', function(){
	cats[2].classList.toggle('display-none');
});

img[3].addEventListener('click', function(){
	clickCount[3]++;
	clicks[3].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[3]}</h1>
	`;
});

toggleSwitch[3].addEventListener('click', function(){
	cats[3].classList.toggle('display-none');
});

img[4].addEventListener('click', function(){
	clickCount[4]++;
	clicks[4].innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount[4]}</h1>
	`;
});

toggleSwitch[4].addEventListener('click', function(){
	cats[4].classList.toggle('display-none');
});
