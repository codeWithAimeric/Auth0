import Link from "next/link"

const LoginButton = () => {
  return (
    <div>
        <Link href="/api/auth/login">Login</Link>
    </div>
  )
}

export default LoginButton