import Timeout from "../timeout/Timeout.js";
function isVideo(el) {
    return el instanceof HTMLVideoElement;
}
function Slide(container, items, controls, time = 3000) {
    const slide = {
        current: null,
        index: Number(localStorage.getItem("slideActive")),
        timeout: null,
        isPaused: false,
        isContinued: false,
        isPausedTimeout: null,
        thumbItems: null,
        thumbCurrent: null,
    };
    function setHide(el) {
        el.classList.remove("active");
        if (el instanceof HTMLVideoElement) {
            el.currentTime = 0;
            el.pause();
        }
    }
    function setShow(index) {
        items.forEach(setHide);
        slide.current = items[index];
        localStorage.setItem("slideActive", String(index));
        if (slide.thumbItems) {
            slide.thumbCurrent = slide.thumbItems[index];
            slide.thumbItems.forEach(setHide);
            slide.thumbCurrent.classList.add("active");
        }
        slide.current.classList.add("active");
        slide.index = index;
        if (isVideo(slide.current)) {
            return setDurationVideo(slide.current);
        }
        setAutoplay(time);
    }
    function addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Slide anterior";
        nextButton.innerText = "Próximo Slide ";
        controls.append(prevButton, nextButton);
        controls.addEventListener("pointerdown", setPause);
        document.addEventListener("pointerup", setContinue);
        document.addEventListener("touchend", setContinue);
        nextButton.addEventListener("pointerup", setNext);
        prevButton.addEventListener("pointerup", setPrev);
    }
    function setPrev() {
        if (slide.isPaused)
            return;
        const prev = slide.index > 0 ? slide.index - 1 : items.length - 1;
        setShow(prev);
    }
    function setNext() {
        if (slide.isPaused)
            return;
        const next = slide.index < items.length - 1 ? slide.index + 1 : 0;
        setShow(next);
    }
    function setContinue() {
        document.body.classList.remove("paused");
        slide.isPausedTimeout?.clear();
        slide.isContinued = true;
        if (slide.isPaused) {
            slide.isPaused = false;
            slide.timeout?.proceed();
            slide.thumbCurrent?.classList.remove("paused");
            if (isVideo(slide.current)) {
                slide.current.play();
            }
        }
    }
    function setPause() {
        document.body.classList.add("paused");
        slide.isPausedTimeout = Timeout(() => {
            slide.timeout?.pause();
            slide.isPaused = true;
            slide.thumbCurrent?.classList.add("paused");
            if (isVideo(slide.current)) {
                slide.current.pause();
            }
        }, 300);
    }
    function setDurationVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener("playing", () => {
            firstPlay && setAutoplay(video.duration * 1000);
            firstPlay = false;
        });
    }
    function setAutoplay(time) {
        slide.timeout?.clear();
        slide.timeout = Timeout(setNext, time);
        if (slide.thumbCurrent) {
            slide.thumbCurrent.style.animationDuration = `${time}ms`;
        }
    }
    function ProgressBar() {
        const container = document.createElement("div");
        container.classList.add("slide__progress-container");
        items.forEach(() => {
            container.innerHTML += `
				<span>
					<span class="slide__progress-bar"></span>
				</span>
			`;
        });
        controls.appendChild(container);
        slide.thumbItems = [
            ...container.querySelectorAll(".slide__progress-bar"),
        ];
    }
    function init() {
        addControls();
        ProgressBar();
        setShow(slide.index);
    }
    return {
        container,
        items,
        controls,
        init,
    };
}
export default Slide;
//# sourceMappingURL=Slide.js.map