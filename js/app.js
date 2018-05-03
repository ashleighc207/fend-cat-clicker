let clicks = document.querySelector('.img-container');
let img = document.querySelector('.img-main');
let clickCount = 0;



img.addEventListener('click', function(){
	clickCount++;
	clicks.innerHTML = `
	<h1 class="heading-one">Clicks: ${clickCount}</h1>
	`;
});

