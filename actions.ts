"use server";

import { z } from "zod";

export const subscribe = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const schema = z.object({
    email: z.string(),
  });

  const parse = schema.safeParse({
    email: formData.get("email"),
  });

  if (!parse.success) {
    return { message: "Failed to subscribe" };
  }

  const data = parse.data;

  const email = data.email;

  try {
    console.log("subscribing!", email);
    return { message: "Subscribed!" };
  } catch(error) {
    return { message: "Failed to subscribe" };
  }
};