

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

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================





$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================




if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href").match(/#\w+$/gi).join(''); 
	  var destination = $(elementClick).offset().top - 70;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}


function createTabs(containerName = false, triggersName = false, tabsName = false) {
    let container = document.querySelector(`${containerName}`);
    if(container) {
       let allTriggers = document.querySelectorAll(`${triggersName}`);
       let allTabs = document.querySelectorAll(`${tabsName}`);

       if(!allTabs.length) {
        let err = new Error('Tabs not found.');
        throw err;
       }

       if(allTriggers.length) {
           allTriggers.forEach(trigger => {
               trigger.addEventListener('click', (e) => {
                   e.preventDefault();
                   const id = trigger.getAttribute('href').replace('#','');
                  
                   trigger.classList.add('active');

                   allTriggers.forEach(i => {
                       if(i == trigger) {
                           return
                       }
                       i.classList.remove('active');
                   });

                   allTabs.forEach(tab => {
                       if(tab.id == id) {
                           tab.classList.add('active')
                       } else {
                           tab.classList.remove('active');
                       }
                   })
                   
               })
           })
       } else {
        let err = new Error('Triggers not found.');
        throw err;
       }
        
    } else {
      let err = new Error('Container not found.');
      throw err;
    }
};
	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';

				let event = new Event("change", {bubbles: true}); 
				original.dispatchEvent(event);
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				input.classList.add('_mask');
				Inputmask(maskValue, {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	let $header = document.querySelector('.header');
if($header) {
    let $menu = document.querySelector('.menu');
    let $burger = document.querySelector('.burger');
    let $menuClose = document.querySelector('.menu__menu-close');
    let $body = document.querySelector('body');
    let $menuList = Array.from(document.querySelector('.menu__list').children);
    let $headerBody = document.querySelector('.header__body');
    let headerBodyHeight = $headerBody.clientHeight;

    const setMenuHeight = () => {
        if(document.documentElement.clientWidth < 992) {
            $menu.style.height = document.documentElement.clientHeight + 'px';
        }
    }

    setMenuHeight();

    window.addEventListener('resize', setMenuHeight);

    window.addEventListener('scroll', () => {
        $header.classList.toggle('_is-scroll', window.pageYOffset > 50);
       // headerBodyHeight = $headerBody.clientHeight;
    })

    $burger.addEventListener('click', () => {
        $menu.classList.add('_open');
        $body.classList.add('_lock');
        document.documentElement.classList.add('_lock');
    })
    $menuClose.addEventListener('click', () => {
        $menu.classList.remove('_open');
        $body.classList.remove('_lock');
        document.documentElement.classList.remove('_lock');
    })

    $menuList.forEach(item => {
        let dropList = item.querySelector('.drop-down__list');
        let title = item.querySelector('.drop-down__title');
        let links = item.querySelectorAll('.drop-down__link');

        if(dropList) {
            item.addEventListener('mouseenter', () => {
                if(document.documentElement.clientWidth >= 992) {
                    if(!item.classList.contains('_open')) {
                        item.classList.add('_open');
                        _slideDown(dropList, 210);
                        $headerBody.style.minHeight = headerBodyHeight + dropList.scrollHeight + 20 + 'px';
                    } 
                }
            })
            item.addEventListener('mouseleave', () => {
                if(document.documentElement.clientWidth >= 992) {
                    item.classList.remove('_open');
                    _slideUp(dropList, 200);
                    $headerBody.style.minHeight = headerBodyHeight + 'px';
                    $headerBody.removeAttribute('style');
                }
            })

            title.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    _slideToggle(dropList);
                    item.classList.toggle('_is-open');
                }
            })
        }

        if(links.length) {
            links.forEach(link => {
                let id = null;
                let home = false;
                let currentPage = false;
                let regExp = new RegExp(window.location.pathname);

                if(link.href.match(/(#\w+)$/)) {
                    id = link.href.match(/(#\w+)$/)[0]
                }


                if(window.location.pathname === '/' || window.location.pathname === '/nl/' || window.location.pathname === '/de/') {
                    home = true;
                }

                if(regExp.test(link.href)) {
                    currentPage = true;
                }

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    $menu.classList.remove('_open');
                    $body.classList.remove('_lock');

                    if(home) {
                        window.location.href = link.href;
                        return;
                    }

                    if(currentPage) {
                        const getElement = (id) => {
                            let el = document.querySelector(id);

                            const findeParent = (el) => {
                                if(el.parentElement.nodeName === "MAIN") {
                                    return el;
                                } else {
                                    return findeParent(el.parentElement);
                                }
                            }

                            if(el) {
                                return findeParent(el);
                            }
                        }

                        let el = getElement(id);
                        if (el) {
                            if(document.documentElement.clientWidth > 767.98) {
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
                    } else {
                        window.location.href = link.href;
                        return false;
                    }

                })
            })
        }
    })
}

(function dropDownInit() {
    let $elements = [].slice.call(document.querySelectorAll('.drop-down'));
    if($elements.length) {
        $elements.forEach(element => {
            let dropList = element.querySelector('.drop-down__list');
            element.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    _slideToggle(dropList);
                    element.classList.toggle('_is-open');
                }
            })
        });
    }
})()

;
	// ==== Popup form handler====

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup_content')) {
				popupClose(e.target.closest('.popup'));
			}
		});

	}
}

function popupClose(popupActive, doUnlock = true) {
	if(unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
	let targetPadding = document.querySelectorAll('._lp');
	if(targetPadding.length) {
		for (let index = 0; index < targetPadding.length; index++) {
			const el = targetPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	if(lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	//body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	let targetPadding = document.querySelectorAll('._lp');

	setTimeout(function() {
		if(targetPadding.length) {
			for (let index = 0; index < targetPadding.length; index++) {
				const el = targetPadding[index];
				el.style.paddingRight = '0px';
			}
		}

		for( let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() { 
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if(e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// === Polyfill ===
	(function() {
		if(!Element.prototype.closest) {
			Element.prototype.closest = function(css) {
				var node = this;
				while(node) {
					if(node.matches(css)) return node;
					else node == node.parentElement;
				}
				return null;
			};
		}
	})();

	(function() {
		if(!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.mozMatchesSelector;
		}
	})();
// === AND Polyfill ===







let $popupGallery = document.querySelector('.popup-gallery');
if($popupGallery) {
	let dataThumbs;
	let dataGallery;

	   dataThumbs = new Swiper($popupGallery.querySelector('.popup-gallery__thumbs'), {
       // loop: true,
		speed: 800,
        spaceBetween: 10,
        slidesPerView: 1,
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		effect: 'fade',
		touchRatio: 0,
      });

       dataGallery = new Swiper($popupGallery.querySelector('.popup-gallery__images'), {
        //loop: true,
		speed: 800,
        spaceBetween: 10,
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
        navigation: {
          nextEl:$popupGallery.querySelector('.popup-gallery__btn-next'),
          prevEl: $popupGallery.querySelector('.popup-gallery__btn-prev'),
        }
      });
	  dataGallery.controller.control = dataThumbs;

	  let $availableCcolours = document.querySelector('.available-colours');
	  if($availableCcolours) {
		  let $items = Array.from($availableCcolours.children);
		  if($items.length) {
			$items.forEach($item => {
				let link = $item.querySelector('.available-colours__item');
				link.addEventListener('click', () => {
					dataGallery.slideTo($items.findIndex((item => item === $item)))
				})
			})
		  }
		  
	  }
} ;
	let $promoHeader = document.querySelector('.promo-header');
if ($promoHeader) {
    let sliderImage, sliderContent;
    let length = $promoHeader.querySelector('.promo-header__body .swiper-wrapper').children.length;
   
    if(length === 1) {
        $promoHeader.querySelector('.promo-header__body').classList.add('_one');
    }
    

    sliderImage = new Swiper($promoHeader.querySelector('.promo-header__images'), {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        touchRatio: 0,
        watchOverflow: true,
        watchSlidesVisibility: true,
        //simulateTouch: false,
        loop: true,
        //preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
    });

    let option = {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        watchOverflow: true,
        watchSlidesVisibility: true,
        loop: true,
        touchRatio: 0,
        navigation: {
            nextEl: $promoHeader.querySelector('.promo-header__btn-next'),
            prevEl: $promoHeader.querySelector('.promo-header__btn-prev'),
        },
        pagination: {
            el: $promoHeader.querySelector('.swiper-pagination'),
            clickable: true,
        },
    }

    if(length > 2) {
        option = {
            ...option,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            touchRatio: 1,
        }
    }

    sliderContent = new Swiper($promoHeader.querySelector('.promo-header__body .swiper-container'),
        option
    );

    sliderContent.controller.control = sliderImage;
};
	let $specifications = document.querySelector('.specifications');
if ($specifications) {
    let $tables = $specifications.querySelectorAll('.specifications__table');
    let $inner = $specifications.querySelector('.specifications__inner');
    let $btn = $specifications.querySelector('.specifications__btn');
    let $bottomText = $specifications.querySelector('.text-block');

    if ($tables.length) {
        let height = 648;

        if (document.documentElement.clientWidth < 768) height = 448;

        if ($inner.scrollHeight < height) {
            $specifications.classList.add('_table-is-small');
        } else {
            $btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!$specifications.classList.contains('_table-open')) {
                    $specifications.classList.add('_table-open');
                    $specifications.style.height = $inner.scrollHeight + 40 + 'px';
                    $btn.innerText = 'Close specifications';
                } else {
                    $specifications.classList.remove('_table-open');
                    $specifications.style.height = height + 'px';
                    $btn.innerText = 'Expand specifications';
                }
            })

            window.addEventListener('resize', () => {
                if ($specifications.classList.contains('_table-open')) {
                    $specifications.style.height = $inner.scrollHeight + 40 + 'px';
                }
            })
        }
    } else {
        if ($btn) {
            $btn.style.display = "none";
        }
    }
}




let $floorColor = document.querySelector('.floor__color');
if ($floorColor) {
    // init == 
    let activeId = document.querySelector('.floor__color-list-item.active').dataset.tab;
    if (activeId) {
        let img = document.querySelector(`.floor__color-preview img[data-tab="${activeId}"]`);
        let text = document.querySelector(`.floor__type-text-item[data-tab="${activeId}"]`);

        if (img) {
            img.classList.add('active');
        }
        if (text) {
            text.classList.add('active');
        }
    }

    // handler ===
    let images = document.querySelectorAll('.floor__color-preview img[data-tab]');
    let texts = document.querySelectorAll('.floor__type-text-item[data-tab]')
    let triggers = document.querySelectorAll('.floor__color-list-item[data-tab]');

    if (triggers.length && images.length) {
        triggers.forEach(item => {
            let id = item.dataset.tab;
            if (!id) return;

            let img = document.querySelector(`.floor__color-preview img[data-tab="${id}"]`)
            let text = document.querySelector(`.floor__type-text-item[data-tab="${id}"]`)

            if(img && text) {
                
            item.addEventListener('click', (e) => {
                e.preventDefault();

                item.classList.add('active');

                triggers.forEach(i => {
                    if (i === item) return;
                    i.classList.remove('active');
                })

                images.forEach(i => {
                    if (i === img) {
                        i.classList.add('active')
                    } else {
                        i.classList.remove('active')
                    }
                })

                texts.forEach(i => {
                    if (i === text) {
                        i.classList.add('active')
                    } else {
                        i.classList.remove('active')
                    }
                })
            })
            }
        })
    }
}





let $floortypeSelect = document.querySelector('#floortype');
if ($floortypeSelect) {
    let $floorImg = document.querySelector('.floor__img img');
    $floortypeSelect.addEventListener('change', () => {
        if ($floorImg) {
            $floorImg.src = $floortypeSelect.value;
            $floorImg.parentElement.classList.add('_loading');

            $floorImg.onload = () => {
                $floorImg.parentElement.classList.remove('_loading');
            }
            $floorImg.onerror = () => {
                $floorImg.parentElement.classList.remove('_loading');
            }
        }
    })
};
	let gallerys = [].slice.call(document.querySelectorAll('.gallery'));
if(gallerys.length) {
    let length = document.querySelector('.gallery__slider .swiper-wrapper').children.length;
    gallerys.forEach(gallery => {
        let dataSlider = new Swiper(gallery.querySelector('.gallery__slider'), {
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: length == 1 ? false : true,
            preloadImages: false,
            watchOverflow: true,
            lazy: {
            	loadPrevNext: true,
            },
            // Dotts
            pagination: {
            	el: gallery.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });
    });
};
	let $latesNewsList = document.querySelector('.latest-news__list');
if($latesNewsList) {
    let $dateItems = [].slice.call($latesNewsList.querySelectorAll('.latest-news__link-date'));
    if($dateItems.length) {
        let maxWidth = Math.max(...$dateItems.map(item => item.clientWidth));
        $dateItems.forEach(element => {
            element.style.minWidth = maxWidth + 'px';
        });
    }
};
	(function checkboxHandler() {
	let $checkboxWrap = document.querySelectorAll('.checkbox-wrap');
	if($checkboxWrap.length) {
		$checkboxWrap.forEach((item, index) => {
			let input = item.querySelector('input[type="checkbox"]');
			input.checked = true;
			item.querySelector('.checkbox-wrap__label').setAttribute('for', `_form${index}`)
			input.id = `_form${index}`;
			
			if(input.checked) {
				item.classList.add('_is-checked');
			}
			
			input.addEventListener('click', () => {
				if(input.checked) {
					item.classList.add('_is-checked');
				} else {
					item.classList.remove('_is-checked');
				}
				
			})
		})
	}
})();;
	let $tableTabs = document.querySelector('.table-tabs');
if($tableTabs) {
    let $tabs = $tableTabs.querySelectorAll('td');
    let $tabsContent = document.querySelectorAll('.tabs-content');
    if($tabs.length) {
        let $tabActive = $tableTabs.querySelector('td.active');
        if($tabActive) {
            let id = $tabActive.dataset.tab;
            if(id) {
                showTabContent(id);
            }
        }


        $tabs.forEach($tab => {
            $tab.addEventListener('click', () => {
                let id = $tab.dataset.tab;
                if(id) {
                    showTabContent(id)
                }

                $tab.classList.add('active');

                $tabs.forEach($el => {
                    if($el === $tab) return;

                    $el.classList.remove('active');
                })
            })
        })
    }

    function showTabContent(id) {
        if($tabsContent.length) {
            $tabsContent.forEach($tabContent => {
                $tabContent.dataset.tab === id ? $tabContent.classList.add('_content-show') : $tabContent.classList.remove('_content-show');
            })
        }
    }
};
	function cardVideoHandler() {
	function togglePlayPause(video,btn) {
		if(video.paused) {
			video.play();
			btn.firstElementChild.className = 'icon-pause';
			video.setAttribute('controls', true);

		} else {
			video.pause();
			btn.firstElementChild.className = 'icon-play2';
			btn.style.opacity = '1';
		}
	}

	let videoBlock = document.querySelectorAll('.video-block');
	if(videoBlock.length) {
		videoBlock.forEach((item) => {
			let video = item.querySelector('.video-block__video');
			let btn = item.querySelector('.video-block__play-pause');

			if(video) {
				if(video.hasAttribute('data-youtube-url')) {
					let url = video.dataset.youtubeUrl;
					btn.addEventListener('click', () => {
						video.innerHTML = `<iframe src="${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
					})

				} else {
					btn.addEventListener('click', (e) => {
						e.preventDefault();
						togglePlayPause(video,btn);
					});
					video.addEventListener('ended', () => {
						video.pause();
						btn.firstElementChild.className = 'icon-play2';
						btn.style.opacity = '1';
						video.removeAttribute('controls');
					});
					video.addEventListener('play', () => {
						btn.firstElementChild.className = 'icon-pause';
					});
					video.addEventListener('pause', () => {
						btn.firstElementChild.className = 'icon-play2';
					});
					video.addEventListener('mouseenter', (e) => { 
						if(!video.paused) {
							btn.style.opacity = '1';
						} 
					});
					video.addEventListener('mouseleave', (e) => { 
						if(!video.paused) {
							btn.style.opacity = '0';
						} 
					});
				}
			}
		})
	}

}

cardVideoHandler();;
	{
    let history = document.querySelector('.history');
    if(history) {
        
        let navSlider = history.querySelector('.history__slider');
        let wrapper = navSlider.querySelector('.swiper-wrapper')
        let navSliderSwiper;
        let autoHeightEl = document.createElement('div');
        autoHeightEl.className = 'history__autoheight';
        history.append(autoHeightEl);

        let initSlide = Array.from(wrapper.children).findIndex(i => i.classList.contains('initial-slide'));

        if(navSlider) {
            navSliderSwiper = new Swiper(navSlider, {
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 800,
                initialSlide: initSlide,
                centeredSlides: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: history.querySelector('.history__btn.next'),
                    prevEl: history.querySelector('.history__btn.prev'),
                },

                on: {
                    slideChange: (e) => {
                        autoHeightEl.style.height = wrapper.children[e.activeIndex].querySelector('.history__text-wrap').clientHeight + 'px';
                    },
                    afterInit: (e) => {
                        autoHeightEl.style.height = wrapper.children[e.activeIndex].querySelector('.history__text-wrap').clientHeight + 'px';
                    }
                }
            });
        }
    }
};


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

//// html example --- <img class="lazy" data-src="https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" src="img/photo/placeholder.jpg" alt="img">


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

	if ("IntersectionObserver" in window) {
        
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
        const lazyLoad = function() {
            if (active === false) {
              active = true;
              setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    //lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
        
                    lazyImages = lazyImages.filter(function(image) {
                      return image !== lazyImage;
                    });
        
                    if (lazyImages.length === 0) {
                      document.removeEventListener("scroll", lazyLoad);
                      window.removeEventListener("resize", lazyLoad);
                      window.removeEventListener("orientationchange", lazyLoad);
                    }
                  }
                });
        
                active = false;
              }, 200);
            }
          };
      
          lazyLoad();
        
          document.addEventListener("scroll", lazyLoad);
          window.addEventListener("resize", lazyLoad);
          window.addEventListener("orientationchange", lazyLoad);
    }
    
});
// === // lazy load ==================================================================;
