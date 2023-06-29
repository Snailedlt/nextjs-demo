"use server";

import { redirect } from "next/navigation";
import { db } from "~/db";
import { NewCountry, countries } from "~/db/schema";

export const addCountryAction = async (formData: FormData) => {
    const name = formData.get("countryinput") as string
    await db.insert(countries).values({name});
    redirect("/countries");
};
