function somar(a) {
	return (b) => {
		return (c) => {
			return a + b + c;
		};
	};
}
// ou const somar = a => b => c => a + b + c;
console.log(somar(2)(5)(10));

const getElementAttr = (attr) => (element) => element.getAttribute(attr);
const getAttrDataSlide = getElementAttr("data-slide");
const getAttrId = getElementAttr("id");

const li = Array.from(document.querySelectorAll("li"));

const dataSlideList = li.map(getAttrDataSlide); // ['1', '2', '3', '4'];
const idList = li.map(getAttrId); // ['item1', 'item2', 'item3', 'item4'];
