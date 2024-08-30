import { getSession } from "@auth0/nextjs-auth0"
import { redirect } from "next/navigation";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";

const Profile = async() => {
    const session = await getSession();
    const user = session?.user;
    if(!user){
        redirect("/");
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center w-full justify-between">
                <div>
                    <h1 className="text-2xl mb-4">Client Component</h1>
                    <ProfileClient />
                </div>
                <div className="text-2xl mb-4">Server Component</div>
                <ProfileServer />
            </div>
        </div>
    )
}

export default Profile