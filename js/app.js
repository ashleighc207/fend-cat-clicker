let model = {
	currentCat: null,
	cats: [
			{
				name: 'Psycho',
				clickCount: 6,
				img: './img/kitten-1.jpg'
			},
			{
				name: 'Sparkles',
				clickCount: 6,
				img: './img/kitten-2.jpg'
			},
			{
				name: 'Pepporoni',
				clickCount: 6,
				img: './img/kitten-3.jpg'
			},
			{
				name: 'Smiles',
				clickCount: 6,
				img: './img/kitten-4.jpg'
			},
			{
				name: 'Apple',
				clickCount: 6,
				img: './img/kitten-5.jpg'
			}
		]
}

let octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},
	getCurrentCat: function(){
		return model.currentCat;
	},
	getCats: function() {
		return model.cats;
	},
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
}

let catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function(e){
			octopus.incrementCounter();
		});

		this.render();
	},
	render: function() {
		let currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.img;
	}
}

let catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},
	render: function() {
		let cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for(let i = 0; i < cats.length; i++){
			let cat = cats[i];
			let elem = document.createElement('li');

			elem.textContent = cat.name;
			elem.addEventListener('click', (function(cat) {
				return function(){
					octopus.setCurrentCat(cat);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
}

octopus.init();