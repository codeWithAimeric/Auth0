import Link from "next/link"
const LogoutButton = () => {
  return (
    <div>
        <Link href="/api/auth/logout">Logout</Link>
    </div>
  )
}

export default LogoutButton