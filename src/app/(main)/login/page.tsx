import { getServerSession } from "next-auth";
import LoginForm from "./form";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//metadata.title = "Login";

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if(session) {
       redirect("/profile/"+session.user.id);
    }
    return <LoginForm />;
}