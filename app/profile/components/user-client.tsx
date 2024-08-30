"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileClient = () => {
    const {user, error, isLoading} = useUser();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
    if(!user) return <div>Not signed in</div>;

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export default ProfileClient