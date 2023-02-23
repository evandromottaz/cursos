function Timeout(handler: TimerHandler, time: number) {
	let id = setTimeout(handler, time);
	const timer = { start: Date.now(), timeLeft: time };

	function clear() {
		clearTimeout(id);
	}

	function pause() {
		const passed = Date.now() - timer.start;
		timer.timeLeft -= passed;
		clear();
	}

	function proceed() {
		clear();
		id = setTimeout(handler, timer.timeLeft);
		timer.start = Date.now();
	}

	return { id, clear, proceed, pause };
}

export default Timeout;
