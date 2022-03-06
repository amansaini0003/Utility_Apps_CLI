const readLineSync = require('readline-sync');
const crypto = require('crypto');


const encodeURL = () => {
	const url = readLineSync.question('please enter the url to be encoded\n');
	const encodedURL = encodeURIComponent(url);
	console.log(`Encoded url: ${encodedURL}`);
}

const decodeURL = () => {
	const encodedURL = readLineSync.question('please enter the url to be decoded\n');
	const originalURL = decodeURIComponent(encodedURL);
	console.log(`Decoded url: ${originalURL}`);
}

const base64EncodeURL = () => {
	const url = readLineSync.question('please enter the url to be encode in base64\n');
	const base64EncodedURL = Buffer.from(url).toString('base64');
	console.log(`Base64 Encoded url: ${base64EncodedURL}`);
}

const base64DecodeURL = () => {
	const base64URL = readLineSync.question('please enter the base64Encoded URL to be decoded.\n');
	const originalURL = Buffer.from(base64URL, 'base64').toString('ascii');
	console.log(`Base64 Decoded url: ${originalURL}`);
}

const generateHash = () => {
	const str = readLineSync.question('please enter the string.\n');
	const algo = 'sha256';
	const hash = crypto.createHash(algo).update(str).digest('hex');
	console.log(`Hash: ${hash}`);
}

const toHumanDate = () => {
	const epochTime = parseInt(readLineSync.question('Enter epoch to be converted to human-readable date: '));
	const currentDate = new Date(epochTime * 1000);
	const currentDateAndTime = {
		year: currentDate.getFullYear(),
		month: currentDate.getMonth()+1,
		date: currentDate.getDate(),
		hours: currentDate.getHours(),
		minutes: currentDate.getMinutes(),
		seconds: currentDate.getSeconds()
	}
	console.log(currentDateAndTime);
}

const toEpoch = () => {
	let currentDateAndTime = {
		year: 0,
		month: 0,
		date: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}
	
	for (key in currentDateAndTime) {
		let value = parseInt(readLineSync.question(`please enter the ${key}\n`));
		currentDateAndTime[key] = value;
	}
	const currentDateAndTimeToString = `${currentDateAndTime.month} ${currentDateAndTime.date}, ${currentDateAndTime.year} ${currentDateAndTime.hours}:${currentDateAndTime.minutes}:${currentDateAndTime.seconds}`;
	
	const myDate =  new Date(currentDateAndTimeToString);
	const myEpoch = myDate.getTime();
	console.log(myEpoch);
}

const converters = () => {
	console.log(" Choose below option which converter you want to use: \n 1. Binary to Decimal\n 2. Binary to HexaDecimal\n 3. Binary to Octal\n 4. Decimal to Binary\n 5. Decimal to HexaDecimal\n 6. Decimal to Ocatal\n 7. HexaDecimal to Binary\n 8. HexaDecimal to Decimal\n 9. HexaDecimal to Octal\n 10. Octal to Binary\n 11. Octal to Decimal\n 12. Octal to HexaDecimal\n ");

		const option = parseInt(readLineSync.question('Choose option b/w 1-12.\n'));
		switch (option) {
			case 1: 	const binaryToDec = parseInt(readLineSync.question('Enter Binary number : '),2);
								console.log(binaryToDec.toString(10))
								break;	
			case 2: 	const binaryToHex = parseInt(readLineSync.question('Enter Binary number : '),2);
								console.log(binaryToHex.toString(16))
								break;
			case 3: 	const binaryToOct = parseInt(readLineSync.question('Enter Binary number : '),2);
								console.log(binaryToOct.toString(8))
								break;
			case 4: 	const decimalToBin = parseInt(readLineSync.question('Enter Decimal number : '),10);
								console.log(decimalToBin.toString(2))
								break;		
			case 5: 	const decimalToHex = parseInt(readLineSync.question('Enter Decimal number : '),10);
								console.log(decimalToHex.toString(16))
								break;				
			case 6:		const decimalToOct = parseInt(readLineSync.question('Enter Decimal number : '),10);
								console.log(decimalToOct.toString(8))
								break;
			case 7: 	const hexaDecimalToBin = parseInt(readLineSync.question('Enter HexaDecimal number : '),16);
								console.log(hexaDecimalToBin.toString(2))
								break;	
			case 8: 	const hexaDecimalToDec = parseInt(readLineSync.question('Enter HexaDecimal number : '),16);
								console.log(hexaDecimalToDec.toString(10))
								break;
			case 9: 	const hexaDecimalToOct = parseInt(readLineSync.question('Enter HexaDecimal number : '),16);
								console.log(hexaDecimalToOct.toString(8))
								break;
			case 10: 	const octalToBin = parseInt(readLineSync.question('Enter Octal number : '),8);
								console.log(octalToBin.toString(2))
								break;		
			case 11:	const octalToDec = parseInt(readLineSync.question('Enter Octal number : '),8);
								console.log(octalToDec.toString(10))
								break;				
			case 12:		const octalToHex = parseInt(readLineSync.question('Enter Octal number : '),8);
								console.log(octalToHex.toString(16))
								break;
			default:
								console.log('Please choose correct option. Thanks. Try again later');
		}
}

const colorToHex = (color) => {
	let hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

const rgbToHex = () => {
	const red = parseInt(readLineSync.question('Enter red value : '));
	const green = parseInt(readLineSync.question('Enter green value : '));
	const blue = parseInt(readLineSync.question('Enter blue value : '));
	
	console.log(` #${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`);
}

const hexToRgb = () => {
	const hex = readLineSync.question('Enter hex value : ');
	const red = parseInt(hex[1]+hex[2],16);
	const green = parseInt(hex[3]+hex[4],16);
	const blue = parseInt(hex[5]+hex[6],16);
	console.log(`{ red: ${red} green: ${green} blue: ${blue} }`);
}

const kgToPound = () => {
	const weightInKg = parseFloat(readLineSync.question('Enter weight in Kg : '));
	const weightInPound = weightInKg * 2.2046244202;
	console.log(`Weight in pounds : ${weightInPound}`);
}

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Utility apps. Which utility function would you like to use?\n\n1.urlEncode \n2.urlDecode\n3.Base64 Encoder\n4.Base64 Decoder\n5.Generate hash\n6.Convert an epoch to human-readable date\n7.Convert human-readable dates to epoch\n8.Converters\n9.Convert RGB to Hex\n10. Convert Hex to RGB\n11. Convert Kilogram to Pound\n'));


console.log(`You selected ${selectedUtilityOption}\n`);
switch (selectedUtilityOption) {
	case 1: encodeURL();
						break;	
	case 2: decodeURL();
						break;
	case 3: base64EncodeURL();
					break;
	case 4: base64DecodeURL();
					break;		
	case 5: generateHash();
					break;				
	case 6: toHumanDate();
					break;
	case 7: toEpoch();
					break;
	case 8: converters();
					break;
	case 9: rgbToHex();
					break;
	case 10: hexToRgb();
					break;
	case 11: kgToPound();
					break;
	default:
	console.log('Please choose correct option. Thanks. Try again later');
}
