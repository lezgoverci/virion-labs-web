import Link from "next/link"
export const RoundedButton = ({text}:{text:string}) =>{
    return(
        <div className="rounded-3xl bg-pink-700 px-3 py-1 text-sm">
            <Link href="/" title={text} >
            {text}
            </Link>
        </div>
    )
}