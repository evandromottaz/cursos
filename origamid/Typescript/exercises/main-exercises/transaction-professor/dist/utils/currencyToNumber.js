/**
 *
 * @param currency 1.200,90 -> 1200.9
 * @returns
 */
export default function currencyToNumber(currency) {
    const number = +currency.replaceAll(".", "").replace(",", ".");
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=currencyToNumber.js.map