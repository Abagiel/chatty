export function preventDefault(e) {
	e.preventDefault();
}

export function capitalize(text) {
	return text.slice(0, 1).toUpperCase() + text.slice(1);
}