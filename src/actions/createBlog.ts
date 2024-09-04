"use server";

import { FormValues } from "@/types";
import fs from "fs";

export const createBlog = async (data: FormValues) => {
  // Convert the data to a JSON string
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("db.json", jsonData);
};
