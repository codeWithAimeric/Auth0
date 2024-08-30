import { getSession } from "@auth0/nextjs-auth0";
const ProfileServer = async() => {
    const session = await getSession();
    const user = session?.user; 
    
    if(!user) {
        return null;
    }

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export default ProfileServer