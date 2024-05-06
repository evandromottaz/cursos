"use server";

import { Product } from "@/app/products/page";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addProduct(product: Product) {
	const response = await fetch("https://api.origamid.online/produtos", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(product),
	});

	if (response.ok) {
		revalidatePath("/products");
		redirect("/products");
	}
}
