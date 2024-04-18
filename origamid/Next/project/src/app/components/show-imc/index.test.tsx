import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowImc, {
	IMC_ERROR_MESSAGE,
	calcImc,
	getImcCategory,
	imcCategories,
} from "@/components/show-imc";

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

describe("getImcCategory(imc)", () => {
	it("should show the category THINNESS with IMC below 18", () => {
		const category = getImcCategory(17);
		expect(category).toBe(imcCategories.THINNESS);
	});

	it("should show the category NORMAL with IMC below 18.5", () => {
		const category = getImcCategory(18.5);
		expect(category).toBe(imcCategories.NORMAL);
	});

	it("should show the category OVERWEIGHT with IMC above 25.6", () => {
		const category = getImcCategory(25.6);
		expect(category).toBe(imcCategories.OVERWEIGHT);
	});

	it("should show the category OBESITY with IMC above 30", () => {
		const category = getImcCategory(30);
		expect(category).toBe(imcCategories.OBESITY);
	});

	it("should show the category SEVERE_OBESITY with IMC above 40", () => {
		const category = getImcCategory(40);
		expect(category).toBe(imcCategories.SEVERE_OBESITY);
	});

	it("should show message if no IMC was passed", () => {
		const error = getImcCategory();
		expect(error).toBe(IMC_ERROR_MESSAGE);
	});

	it("should render IMC category on screen", async () => {
		render(<ShowImc />);

		fireEvent.change(screen.getByTestId("imc-height"), {
			target: { value: "1.6" },
		});
		fireEvent.change(screen.getByTestId("imc-weight"), { target: { value: "54" } });
		userEvent.click(screen.getByTestId("imc-submit"));

		await waitFor(async () => {
			const elCategory = (await screen.findByTestId("imc-category")).textContent;
			expect(elCategory).toBe(imcCategories.NORMAL);
		});
	});
});
