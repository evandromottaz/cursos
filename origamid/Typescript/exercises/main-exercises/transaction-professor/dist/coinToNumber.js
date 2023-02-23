/**
 *
 * @param coin 1.200,90 -> 1200.9
 * @returns
 */
export function coinToNumber(coin) {
    const number = +coin.replaceAll(".", "").replace(",", ".");
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=coinToNumber.js.map