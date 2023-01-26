import createElement from "../utils/createElement.js";
const Statistic = (counter) => {
    console.log(counter);
    const elements = Object.entries(counter).forEach(([key, value]) => {
        const element = createElement("h2", key);
        const span = createElement("span", `${key}__value`);
        span.innerText = value;
        element.appendChild(span);
        return element;
    });
    console.log(elements);
};
export default Statistic;
//# sourceMappingURL=Statistic.js.map