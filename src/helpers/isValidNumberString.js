export function isValidNumberString(input) {
	const regex = /^\d+$/; // ^ means start of string, \d means digit, + means one or more, $ means end of string
	return regex.test(input);
}