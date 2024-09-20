import {createClient} from "@/app/utils/supabase/server";

export default function ClubPage({ params }: { params: { clubid: string } }){
    // Find club data from database -- if not found, use notFound();
    const supabase = createClient();

    // const data = supabase.from('')
    return (
        <div>
            {params.clubid}
        </div>
    )
}