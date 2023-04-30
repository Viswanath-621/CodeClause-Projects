const objFormula = JSON.parse(formula);
// const objFormulae = JSON.parse(formulae);

function ValidateLengthConverterForm() {
	_cmnRemoveAllErrorMessage();

	var fromLength = document.getElementById('fromLength').value;
	if (
		fromLength == '' ||
		isNaN(fromLength) ||
		(!isNaN(fromLength) && Number(fromLength) <= 0)
	) {
		_cmnShowErrorMessageBottomOfTheInputFiled(
			'fromLength',
			'Enter valid Length.'
		);
		return false;
	}

	return true;
}

function ValidateWeightConverterForm() {
	_cmnRemoveAllErrorMessage();

	var fromWeight = document.getElementById('fromWeight').value;
	if (
		fromWeight == '' ||
		isNaN(fromWeight) ||
		(!isNaN(fromWeight) && Number(fromWeight) <= 0)
	) {
		_cmnShowErrorMessageBottomOfTheInputFiled(
			'fromWeight',
			'Enter valid Weight.'
		);
		return false;
	}

	return true;
}

function RestLengthConverter() {
	if (confirm('Are you sure want to reset the converter?')) {
		document.getElementById('fromLength').value = '';
		document.getElementById('fromUnit').value = 'Centimeter';
		document.getElementById('toUnit').value = 'Millimeter';
		document.getElementById('outputLength').value = '';

		_cmnRemoveAllErrorMessage();

		_cmnHideElement('OutputResult');
		_cmnShowElement('OutputInfo', 'flex');
	}
}

function RestWeightConverter() {
	if (confirm('Are you sure want to reset the converter?')) {
		document.getElementById('fromWeight').value = '';
		document.getElementById('fromUnit').value = 'Centigram';
		document.getElementById('toUnit').value = 'Milligram';
		document.getElementById('outputWeight').value = '';

		_cmnRemoveAllErrorMessage();

		_cmnHideElement('OutputResult');
		_cmnShowElement('OutputInfo', 'flex');
	}
}

function CalculateLength() {
	if (ValidateLengthConverterForm()) {
		var fromUnit = document.getElementById('fromUnit').value;
		var toUnit = document.getElementById('toUnit').value;
		var fromLength = document.getElementById('fromLength').value;
		var outputlength = document.getElementById('outputLength');

		ShowFormula(fromUnit, toUnit);

		var result = ConvertLength(fromLength, fromUnit, toUnit);
		outputlength.value = Number(result).toFixed(2);
		document.getElementById('lengthResult').innerHTML =
			fromLength + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;

		_cmnHideElement('OutputInfo');
		_cmnShowElement('OutputResult', 'flex');
	}
}

function CalculateWeight() {
	if (ValidateWeightConverterForm()) {
		var fromUnit = document.getElementById('fromUnit').value;
		var toUnit = document.getElementById('toUnit').value;
		var fromWeight = document.getElementById('fromWeight').value;
		var outputWeight = document.getElementById('outputWeight');

		ShowFormulae(fromUnit, toUnit);

		var result = ConvertWeight(fromWeight, fromUnit, toUnit);
		outputWeight.value = Number(result).toFixed(2);
		// document.getElementById('WeightResult').innerHTML =
		// 	fromWeight + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;

		_cmnHideElement('OutputInfo');
		_cmnShowElement('OutputResult', 'flex');
	}
}

function ConvertLength(fromLength, fromUnit, toUnit) {
	fromLength = Number(fromLength);
	var result = 0;
	var makeThisMillimeter = 0;
	var inMillimeter = 0;

	switch (fromUnit) {
		case 'Millimeter':
			makeThisMillimeter = 1;
			break;
		case 'Centimeter':
			makeThisMillimeter = 10;
			break;
		case 'Decimeter':
			makeThisMillimeter = 100;
			break;
		case 'Meter':
			makeThisMillimeter = 1000;
			break;
		case 'Kilometer':
			makeThisMillimeter = 1000000;
			break;
		case 'Foot':
			makeThisMillimeter = 304.8;
			break;
		case 'Inch':
			makeThisMillimeter = 25.4;
			break;
		case 'Mile':
			makeThisMillimeter = 1609344;
			break;
		case 'Yard':
			makeThisMillimeter = 914.4;
			break;
	}
	inMillimeter = fromLength * makeThisMillimeter;

	switch (toUnit) {
		case 'Millimeter':
			result = inMillimeter;
			break;
		case 'Centimeter':
			result = inMillimeter / 10;
			break;
		case 'Decimeter':
			result = inMillimeter / 100;
			break;
		case 'Meter':
			result = inMillimeter / 1000;
			break;
		case 'Kilometer':
			result = inMillimeter / 1000000;
			break;
		case 'Foot':
			result = inMillimeter / 304.8;
			break;
		case 'Inch':
			result = inMillimeter / 25.4;
			break;
		case 'Mile':
			result = inMillimeter / 1609344;
			break;
		case 'Yard':
			result = inMillimeter / 914.4;
			break;
	}
	return result;
}

function ConvertWeight(fromWeight, fromUnit, toUnit) {
	fromWeight = Number(fromWeight);
	var result = 0;
	var makeThisMilligram = 0;
	var inMilligram = 0;

	switch (fromUnit) {
		case 'Milligram':
			makeThisMilligram = 1;
			break;
		case 'Centigram':
			makeThisMilligram = 10;
			break;
		case 'Decigram':
			makeThisMilligram = 100;
			break;
		case 'Gram':
			makeThisMilligram = 1000;
			break;
		case 'Kilogram':
			makeThisMilligram = 1000000;
			break;
	}
	inMilligram = fromWeight * makeThisMilligram;

	switch (toUnit) {
		case 'Milligram':
			result = inMilligram;
			break;
		case 'Centigram':
			result = inMilligram / 10;
			break;
		case 'Decigram':
			result = inMilligram / 100;
			break;
		case 'Gram':
			result = inMilligram / 1000;
			break;
		case 'Kilogram':
			result = inMilligram / 1000000;
			break;
	}
	return result;
}

function ShowFormula(fromUnit, toUnit) {
	document.getElementById('lengthFormula').innerHTML = '';

	for (var i = 0; i < objFormula.conversions.length; i++) {
		if (
			objFormula.conversions[i].from.toLowerCase() == fromUnit.toLowerCase() &&
			objFormula.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
		) {
			document.getElementById('lengthFormula').innerHTML =
				objFormula.conversions[i].formula;
		}
	}
}

function ShowFormulae(fromUnit, toUnit) {
	document.getElementById('weightFormula').innerHTML = '';

	for (var i = 0; i < objFormula.conversions.weight; i++) {
		if (
			objFormula.conversions[i].from.toLowerCase() == fromUnit.toLowerCase() &&
			objFormula.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
		) {
			document.getElementById('weightFormula').innerHTML =
				objFormula.conversions[i].formula;
		}
	}
}
