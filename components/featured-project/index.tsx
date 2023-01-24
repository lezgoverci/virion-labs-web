import Link from "next/link"
import { Card } from "../../theme/card"
export const FeaturedProject = ({title}:{title:string}) =>{
    return(
        <Card title={`${title}`} />
    )
}