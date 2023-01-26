function createElement(element: string, classNames?: string) {
	const el = document.createElement(element);
	classNames && el.classList.add(classNames);
	return el;
}

export default createElement;
