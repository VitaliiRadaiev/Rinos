

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	let wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	wrapper.append(...document.body.children);
	document.body.append(wrapper);

	//==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				window.addEventListener('resize', setPedding);
			}

		}
	}
	//==== AND ADD PADDING-TOP ================================

	(function slowAnchor() {

		const getElement = () => {
			let el = document.querySelector(window.location.hash ? window.location.hash : null);

			const findeParent = (el) => {
				if (el.parentElement.nodeName === "MAIN") {
					return el;
				} else {
					return findeParent(el.parentElement);
				}
			}

			if (el) {
				return findeParent(el);
			}
		}

		let el = getElement();


		if (el) {
			if (document.documentElement.clientWidth > 767.98) {
				window.scrollTo({
					top: el.offsetTop - 120,
					behavior: 'smooth'
				})
			} else {
				window.scrollTo({
					top: el.offsetTop - 70,
					behavior: 'smooth'
				})
			}
		}
	})()

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/header/header.js');
	@@include('../common/popup/popup.js');
	@@include('pages/home.js');
	@@include('pages/product-detail.js');
	@@include('../common/gallery/gallery.js');
	@@include('../common/latest-news/latest-news.js');
	@@include('../common/checkbox/checkbox.js');
	@@include('../common/table-tabs/table-tabs.js');
	@@include('../common/video-block/video-block.js');
	@@include('../common/history/history.js');


});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile) {
		document.body.classList.add('_is-mobile');
	}

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// check the number of children
	let productsListAll = document.querySelectorAll('.products__list');
	if (productsListAll.length) {
		productsListAll.forEach(productsList => {
			if (productsList.children.length < 3) {
				productsList.classList.add('products__list--items-center')
			}
		})
	}
});

//@@include('plagins/lazy-load.js');
