import { timeOptions } from './constants';

export function preventDefault(e) {
	e.preventDefault();
}

export function capitalize(text) {
	return text.slice(0, 1).toUpperCase() + text.slice(1);
}

export function toCamelName(str) {
	const s = str.includes(' ') 
		? str.split(' ')
		: [];

	let r = '';

	if (s.length <= 1) return str;

	s.reduce((init, next) => {
		return r += capitalize(next);
	}, r)

	return r;
}

export function getTime(region) {
	const date = new Date();
	return date.toLocaleString(region, timeOptions);
}