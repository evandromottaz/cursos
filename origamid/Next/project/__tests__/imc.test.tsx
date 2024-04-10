import { calcImc } from "@/components/show-imc";

describe("calcImc()", () => {
	it("should show imc of height 1.8 and weight 50kg is 13.8", () => {
		const imc = calcImc({ height: 1.8, weight: 50 });
		expect(imc).toBe(13.8);
	});

	it("should show imc of height 1.7 and weight 40kg is 11.7", () => {
		const imc = calcImc({ height: 1.7, weight: 40 });
		expect(imc).toBe(11.7);
	});

	it("should show imc of height 2 and weight 70kg is 17.5", () => {
		const imc = calcImc({ height: 2, weight: 70 });
		expect(imc).toBe(17.5);
	});
});
