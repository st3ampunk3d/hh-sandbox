import { getServerSession } from "next-auth";
import UpdateUserForm from "./form";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//metadata.title = "Profile Update";

export default async function UpdateUserPage() {
    const session = await getServerSession(authOptions);
    if(!session) {
       redirect("/login");
    }
    return <UpdateUserForm />;
}