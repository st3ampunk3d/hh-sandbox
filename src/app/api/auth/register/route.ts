import { createUser } from "@/app/lib/actions";
import { User } from "@/app/lib/interface";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, password, is_seller, business_name } =
      await request.json();
    var user: User = {
      id: "",
      name: name,
      email: email,
      password: password,
      is_seller: is_seller,
      business_name: business_name ?? "",
    };

    console.log(user);
    const response = await createUser(user);

    console.log(response);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "Success" });
}
