/* 
Project 3
Interactive Form TeamTreeHouse By-Moukim Hfaidh-

*/

//Declaring Variables
const name = document.getElementById('name');
const email = document.getElementById('mail');
const title = document.getElementById('title');
const size = document.getElementById('size');
const design = document.getElementById('design');
const color = document.getElementById('color');
const payment = document.getElementById('payment');
const ccnum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expmonth = document.getElementById('exp-month');
const expyear = document.getElementById('exp-year');
const othertitle = document.getElementById('other-title');
const totalSpan = document.createElement('span');
const form = document.querySelector('form');
totalSpan.textContent = 'Total';
let total = 0;
let invalidEmailSpan = document.createElement('span');
invalidEmailSpan.classList.add('error');
invalidEmailSpan.textContent = 'Must be a valid email address';
let invalidName = document.createElement('span');
invalidName.classList.add('error');
invalidName.textContent = 'Please enter a name';
let invalidActivity = document.createElement('span');
invalidActivity.classList.add('error');
invalidActivity.textContent = 'Please register at least for one activity';
let invalidccnum = document.createElement('span');
invalidccnum.classList.add('error');
invalidccnum.textContent = 'Card number must be between 13 and 16 digits.';
let invalidzip = document.createElement('span');
invalidzip.classList.add('error');
invalidzip.textContent = 'Zip code must be 5 digits length';
let invalidcvv = document.createElement('span');
invalidcvv.classList.add('error');
invalidcvv.textContent = 'CVV code must be 3 digits length';
let colorLabel = document.querySelector('#colors-js-puns label');
let colorSelect = document.querySelector('#color');
//first to be loaded
window.onload = function() {
	name.focus();
	othertitle.style.display = 'none';
	document.querySelector('option[value="PleaseselectaT-shirttheme"]');
	document.querySelector('.activities').append(totalSpan);
	paypalDiv.style.display = 'none';
	bitcoinDiv.style.display = 'none';
	//Here i am inserting the span error elements i created once the page loads
	//so the error message pops out to the user until validation process :D
	email.parentNode.insertBefore(invalidEmailSpan, email.nextElementSibling);
	name.parentNode.insertBefore(invalidName, name.nextElementSibling);
	document.querySelector('.activities').parentNode.insertBefore(invalidActivity, document.querySelector('.activities').nextElementSibling);
	ccnum.parentNode.insertBefore(invalidccnum, ccnum.nextElementSibling);
	zip.parentNode.insertBefore(invalidzip, zip.nextElementSibling);
	cvv.parentNode.insertBefore(invalidcvv, cvv.nextElementSibling);
	colorLabel.style.display = 'none';
	colorSelect.style.display = 'none';
};
//T-shirt Section
title.addEventListener('click', (e) => {
	if (e.target.value == 'other') othertitle.style.display = 'block';
	else othertitle.style.display = 'none';
});
const colorOptions = document.querySelectorAll('#color option');
const designOptions = document.querySelectorAll('#design option');
if (designOptions[1].selected == false && designOptions[2].selected == false) {
	colorOptions[1].hidden = true;
	colorOptions[2].hidden = true;
	colorOptions[3].hidden = true;
	colorOptions[4].hidden = true;
	colorOptions[5].hidden = true;
	colorOptions[6].hidden = true;
}
design.addEventListener('change', (event) => {
	if (event.target.value == 'js puns') {
		colorLabel.style.display = 'block';
		colorSelect.style.display = 'block';
		colorOptions[0].hidden = true;
		colorOptions[1].hidden = false;
		colorOptions[2].hidden = false;
		colorOptions[3].hidden = false;
		colorOptions[4].hidden = true;
		colorOptions[5].hidden = true;
		colorOptions[6].hidden = true;
		colorOptions[1].selected = true;
	} else if (event.target.value == 'heart js') {
		colorLabel.style.display = 'block';
		colorSelect.style.display = 'block';
		colorOptions[0].hidden = true;
		colorOptions[1].hidden = true;
		colorOptions[2].hidden = true;
		colorOptions[3].hidden = true;
		colorOptions[4].hidden = false;
		colorOptions[5].hidden = false;
		colorOptions[6].hidden = false;
		colorOptions[4].selected = true;
	} else {
		colorLabel.style.display = 'none';
		colorSelect.style.display = 'none';
		colorOptions[0].hidden = false;
		colorOptions[1].hidden = true;
		colorOptions[2].hidden = true;
		colorOptions[3].hidden = true;
		colorOptions[4].hidden = true;
		colorOptions[5].hidden = true;
		colorOptions[6].hidden = true;
		colorOptions[0].selected = true;
	}
});
//The activities Section
const checkboxes = document.querySelectorAll('.activities input');
document.querySelector('.activities').addEventListener('change', (e) => {
	let clicked = e.target;
	let clickedTime = clicked.getAttribute('data-day-and-time');
	let clickedCost = clicked.getAttribute('data-cost');
	for (let i = 0; i < checkboxes.length; i++) {
		let checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
		if (clickedTime === checkboxTime && clicked !== checkboxes[i]) {
			if (clicked.checked) {
				checkboxes[i].disabled = true;
			} else {
				checkboxes[i].disabled = false;
			}
		}
	}
	if (clicked.checked) {
		total = parseInt(total) + parseInt(clickedCost);
	} else {
		total = parseInt(total) - parseInt(clickedCost);
	}
	totalSpan.textContent = "Total: $" + total;
});
//the payment section
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const creditCardDiv = document.querySelector('#credit-card');
const paymentOptions = document.querySelectorAll('#payment option');
if (paymentOptions[2].selected == false && paymentOptions[3].selected == false) {
	paymentOptions[0].hidden = true;
}
payment.addEventListener('change', (event) => {
	if (paymentOptions[1].selected) {
		creditCardDiv.style.display = 'block';
		paypalDiv.style.display = 'none';
		bitcoinDiv.style.display = 'none';
	} else if (paymentOptions[2].selected) {
		bitcoinDiv.style.display = 'none';
		creditCardDiv.style.display = 'none';
		paypalDiv.style.display = 'block';
	} else if (paymentOptions[3].selected) {
		creditCardDiv.style.display = 'none';
		paypalDiv.style.display = 'none';
		bitcoinDiv.style.display = 'block';
	}
});
//Name validation
const nameValidator = () => {
	let nameValue = name.value;
	if (nameValue.length > 0) {
		name.style.border = '1px solid green';
		return true;
	} else {
		name.style.border = '1px solid red';
		return false;
	}
}
//Email validation
const emailValidator = () => {
	if (isValidEmail(email.value) == true) {
		email.style.border = "1px solid green";
		return false;
	} else {
		email.style.border = "1px solid red";
		return true;
	}
}
const ccnumValidator = () => {
	if (isValidCreditCardNum(ccnum.value) == true) {
		ccnum.style.border = "1px solid green";
		return false;
	} else {
		ccnum.style.border = "1px solid red";
		return true;
	}
}
const cvvValidator = () => {
	if (isValidcvv(cvv.value) == true) {
		cvv.style.border = "1px solid green";
		return false;
	} else {
		cvv.style.border = "1px solid red";
		return true;
	}
}
const zipValidator = () => {
	if (isValidzip(zip.value) == true) {
		zip.style.border = "1px solid green";
		return false;
	} else {
		zip.style.border = "1px solid red";
		invalidzip.textContent = "Can't be blanc";
		invalidzip.style.display = 'block';
		return true;
	}
}
//validation with regex for email and name
function isValidEmail(email) {
	return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function isValidname(name) {
	return /^[a-zA-Z ]*[^0-9]$/.test(name);
}
//Credit card Validation
function isValidCreditCardNum(ccnum) {
	return /^[0-9]{13,16}$/.test(ccnum);
}

function isValidzip(zip) {
	return /^[0-9]{5}$/.test(zip);
}

function isValidcvv(cvv) {
	return /^[0-9]{3}$/.test(cvv);
}

function showOrHideTip(show, element) {
	// show element when show is true, hide when false
	if (show) {
		element.style.display = "inherit";
	} else {
		element.style.display = "none";
	}
}

function createListener(validator) {
	return e => {
		const text = e.target.value;
		const valid = validator(text);
		const showTip = text !== "" && !valid;
		const tooltip = e.target.nextElementSibling;
		showOrHideTip(showTip, tooltip);
	};
}
//validating at least one activity
const activitiesValidator = () => {
	let numberofchecked = 0;
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			numberofchecked++;
		}
	}
	if (numberofchecked > 0) {
		invalidActivity.style.display = 'none';
		return true;
	} else {
		invalidActivity.style.display = 'block';
		return false;
	}
}
email.addEventListener('input', createListener(isValidEmail));
name.addEventListener('input', createListener(isValidname));
if (paymentOptions[0].selected) {
	ccnum.addEventListener('input', createListener(isValidCreditCardNum));
	zip.addEventListener('input', createListener(isValidzip));
	cvv.addEventListener('input', createListener(isValidcvv));
}
//preventing form submission until data is validated
form.addEventListener('submit', (e) => {
	if (!nameValidator()) {
		e.preventDefault();
	}
	if (!emailValidator()) {
		e.preventDefault();
	}
	if (!activitiesValidator()) {
		e.preventDefault();
	}
	if (paymentOptions[0].selected) {
		if (!ccnumValidator()) {
			e.preventDefault();
		}
		if (!cvvValidator()) {
			e.preventDefault();
		}
		if (!zipValidator()) {
			e.preventDefault();
		}
	}
});