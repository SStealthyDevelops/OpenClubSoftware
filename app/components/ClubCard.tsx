import React from "react";
import {useRouter} from "next/navigation";

export type ClubInfo = {
    id: number,
    name: string,
    slug: string,
    logo?: string,
    banner?: string,
    description?: string ,
}


const ClubCard:React.FC<ClubInfo> = ({id, name, slug, logo, banner, description}) => {

    const router = useRouter();

    if (!description) description = 'No description found.';
    if (!banner) banner = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';
    return (
        <button onClick={() => {
            router.push(`/club/${id}`);
        }}>
            <div
                className="flex flex-col m-4 min-h-64 card relative rounded-xl border border-blue-950 hover:scale-105 duration-200">
                <div className="rounded-t-xl flex flex-row bg-cover bg-center"
                     style={{backgroundImage: `url('${banner}')`}}>
                    <p className="text-xl m-5">{name}</p>
                </div>
                <div className="flex flex-1 p-5">
                    <p>{description}</p>
                </div>
            </div>
        </button>
    )
}

export default ClubCard;