import Slide from "./slide/Slide.js";

function App() {
	const container = document.querySelector(".slide");
	const items = document.querySelectorAll(".slide__item");
	const controls = document.querySelector(".slide__controls");

	if (container && items && controls && items.length) {
		const slide = Slide(container, [...items], controls, 3000);
		slide.init();
	}
}

export default App;
