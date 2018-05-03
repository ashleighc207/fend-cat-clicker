let clicks = document.querySelector('.h1-container');
let imgS = document.querySelector('.img-sparkles');
let imgP = document.querySelector('.img-psycho');
let clickCount = 0;



imgS.addEventListener('click', function(){
	clickCount++;
	clicks.innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount}</h1>
	`;
});

imgP.addEventListener('click', function(){
	clickCount++;
	clicks.innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount}</h1>
	`;
});

