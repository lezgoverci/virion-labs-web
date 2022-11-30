import Link from "next/link"

export default function Header(){
    return <div>
        <Link href="/">Home</Link>
        <Link href="/vision">Vision</Link>
        <Link href="/ecosystem">Ecosystem</Link>
        <Link href="/why-virion">Why Virion</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/virion-connect">Virion Connect</Link>
    </div>
}