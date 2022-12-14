import Link from "next/link"
export const RoundedButton = ({text,link="/"}:{text:string,link?: string}) =>{
    return(
        <div className="rounded-3xl bg-pink-700 px-3 py-1 text-sm">
            <Link href={link} title={text} >
            {text}
            </Link>
        </div>
    )
}