let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.viswa-navlists');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true,
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-landing-img', { delay: 450, origin: 'right' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'bottom' });

// const root = document.documentElement;
// root.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
// root.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
// root.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
// root.style.setProperty('--time', `${2 + Math.random() * 2}s`);
// root.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);

let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button');

function roundNumber(number) {
	return Math.round(number * 100) / 100;
}

/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function () {
	let cTemp = parseFloat(celsiusInput.value);
	let fTemp = cTemp * (9 / 5) + 32;
	let kTemp = cTemp + 273.15;

	fahrenheitInput.value = roundNumber(fTemp);
	kelvinInput.value = roundNumber(kTemp);
});

/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function () {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5 / 9);
	let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

	celsiusInput.value = roundNumber(cTemp);
	kelvinInput.value = roundNumber(kTemp);
});

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function () {
	let kTemp = parseFloat(kelvinInput.value);
	let cTemp = kTemp - 273.15;
	let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

	celsiusInput.value = roundNumber(cTemp);
	fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener('click', () => {
	celsiusInput.value = '';
	fahrenheitInput.value = '';
	kelvinInput.value = '';
});

let country_list = {
	AED: 'AE',
	AFN: 'AF',
	XCD: 'AG',
	ALL: 'AL',
	AMD: 'AM',
	ANG: 'AN',
	AOA: 'AO',
	AQD: 'AQ',
	ARS: 'AR',
	AUD: 'AU',
	AZN: 'AZ',
	BAM: 'BA',
	BBD: 'BB',
	BDT: 'BD',
	XOF: 'BE',
	BGN: 'BG',
	BHD: 'BH',
	BIF: 'BI',
	BMD: 'BM',
	BND: 'BN',
	BOB: 'BO',
	BRL: 'BR',
	BSD: 'BS',
	NOK: 'BV',
	BWP: 'BW',
	BYR: 'BY',
	BZD: 'BZ',
	CAD: 'CA',
	CDF: 'CD',
	XAF: 'CF',
	CHF: 'CH',
	CLP: 'CL',
	CNY: 'CN',
	COP: 'CO',
	CRC: 'CR',
	CUP: 'CU',
	CVE: 'CV',
	CYP: 'CY',
	CZK: 'CZ',
	DJF: 'DJ',
	DKK: 'DK',
	DOP: 'DO',
	DZD: 'DZ',
	ECS: 'EC',
	EEK: 'EE',
	EGP: 'EG',
	ETB: 'ET',
	EUR: 'FR',
	FJD: 'FJ',
	FKP: 'FK',
	GBP: 'GB',
	GEL: 'GE',
	GGP: 'GG',
	GHS: 'GH',
	GIP: 'GI',
	GMD: 'GM',
	GNF: 'GN',
	GTQ: 'GT',
	GYD: 'GY',
	HKD: 'HK',
	HNL: 'HN',
	HRK: 'HR',
	HTG: 'HT',
	HUF: 'HU',
	IDR: 'ID',
	ILS: 'IL',
	INR: 'IN',
	IQD: 'IQ',
	IRR: 'IR',
	ISK: 'IS',
	JMD: 'JM',
	JOD: 'JO',
	JPY: 'JP',
	KES: 'KE',
	KGS: 'KG',
	KHR: 'KH',
	KMF: 'KM',
	KPW: 'KP',
	KRW: 'KR',
	KWD: 'KW',
	KYD: 'KY',
	KZT: 'KZ',
	LAK: 'LA',
	LBP: 'LB',
	LKR: 'LK',
	LRD: 'LR',
	LSL: 'LS',
	LTL: 'LT',
	LVL: 'LV',
	LYD: 'LY',
	MAD: 'MA',
	MDL: 'MD',
	MGA: 'MG',
	MKD: 'MK',
	MMK: 'MM',
	MNT: 'MN',
	MOP: 'MO',
	MRO: 'MR',
	MTL: 'MT',
	MUR: 'MU',
	MVR: 'MV',
	MWK: 'MW',
	MXN: 'MX',
	MYR: 'MY',
	MZN: 'MZ',
	NAD: 'NA',
	XPF: 'NC',
	NGN: 'NG',
	NIO: 'NI',
	NPR: 'NP',
	NZD: 'NZ',
	OMR: 'OM',
	PAB: 'PA',
	PEN: 'PE',
	PGK: 'PG',
	PHP: 'PH',
	PKR: 'PK',
	PLN: 'PL',
	PYG: 'PY',
	QAR: 'QA',
	RON: 'RO',
	RSD: 'RS',
	RUB: 'RU',
	RWF: 'RW',
	SAR: 'SA',
	SBD: 'SB',
	SCR: 'SC',
	SDG: 'SD',
	SEK: 'SE',
	SGD: 'SG',
	SKK: 'SK',
	SLL: 'SL',
	SOS: 'SO',
	SRD: 'SR',
	STD: 'ST',
	SVC: 'SV',
	SYP: 'SY',
	SZL: 'SZ',
	THB: 'TH',
	TJS: 'TJ',
	TMT: 'TM',
	TND: 'TN',
	TOP: 'TO',
	TRY: 'TR',
	TTD: 'TT',
	TWD: 'TW',
	TZS: 'TZ',
	UAH: 'UA',
	UGX: 'UG',
	USD: 'US',
	UYU: 'UY',
	UZS: 'UZ',
	VEF: 'VE',
	VND: 'VN',
	VUV: 'VU',
	YER: 'YE',
	ZAR: 'ZA',
	ZMK: 'ZM',
	ZWD: 'ZW',
};

const dropList = document.querySelectorAll('form select'),
	fromCurrency = document.querySelector('.from select'),
	toCurrency = document.querySelector('.to select'),
	getButton = document.querySelector('form button');
for (let i = 0; i < dropList.length; i++) {
	for (let currency_code in country_list) {
		let selected =
			i == 0
				? currency_code == 'USD'
					? 'selected'
					: ''
				: currency_code == 'NPR'
				? 'selected'
				: '';
		let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
		dropList[i].insertAdjacentHTML('beforeend', optionTag);
	}
	dropList[i].addEventListener('change', (e) => {
		loadFlag(e.target);
	});
}
function loadFlag(element) {
	for (let code in country_list) {
		if (code == element.value) {
			let imgTag = element.parentElement.querySelector('img');
			imgTag.src = `https://flagcdn.com/48x36/${country_list[
				code
			].toLowerCase()}.png`;
		}
	}
}
window.addEventListener('load', () => {
	getExchangeRate();
});
getButton.addEventListener('click', (e) => {
	e.preventDefault();
	getExchangeRate();
});
const exchangeIcon = document.querySelector('form .icon');
exchangeIcon.addEventListener('click', () => {
	let tempCode = fromCurrency.value;
	fromCurrency.value = toCurrency.value;
	toCurrency.value = tempCode;
	loadFlag(fromCurrency);
	loadFlag(toCurrency);
	getExchangeRate();
});
function getExchangeRate() {
	const amount = document.querySelector('form input');
	const exchangeRateTxt = document.querySelector('form .exchange-rate');
	let amountVal = amount.value;
	if (amountVal == '' || amountVal == '0') {
		amount.value = '1';
		amountVal = 1;
	}
	exchangeRateTxt.innerText = 'Getting exchange rate...';
	let url = `https://v6.exchangerate-api.com/v6/b4a826cef93a49cda1395aff/latest/${fromCurrency.value}`;
	fetch(url)
		.then((response) => response.json())
		.then((result) => {
			let exchangeRate = result.conversion_rates[toCurrency.value];
			let totalExRate = (amountVal * exchangeRate).toFixed(2);
			exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
		})
		.catch(() => {
			exchangeRateTxt.innerText = 'Something went wrong';
		});
}
