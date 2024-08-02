import {notFound} from "next/navigation";

export default function ClubPage({ params }: { params: { clubid: string } }){
    // Find club data from database -- if not found, use notFound();
    return (
        <div>
            {params.clubid}
        </div>
    )
}