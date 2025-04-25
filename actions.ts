"use server";

import { z } from "zod";

export const subscribe = async (
  prevState: {
    status: string | number;
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
    return { status: 500 };
  }

  const data = parse.data;

  const email = data.email;

  try {
    const response = await fetch(`https://${process.env.MAILCHIMP_REGION}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`harr041:${process.env.MAILCHIMP_API_KEY}`),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "subscribed") {
      return { status: "subscribed" };
    } else {
      return { status: data.status };
    }
  } catch(error) {
    return { status: 500 };
  }
};