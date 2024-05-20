import { getServerSession } from "next-auth";
import SignupForm from "./form";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//metadata.title = "Sign Up";

export default async function SignupPage() {
    const session = await getServerSession(authOptions);
    if(session) {
        redirect("/profile/"+session.user.id);
    }
    return <SignupForm />;
}