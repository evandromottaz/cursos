"use server";

import { cookies } from "next/headers";

export default async function getCookie(key: string) {
	return cookies().get(key)?.value;
}
