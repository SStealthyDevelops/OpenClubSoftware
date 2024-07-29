import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

export type ClubInfo = {
    id: number,
    name: string,
    slug: string,
    logo?: string,
    banner?: string,
    description?: string,
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
                className="flex flex-col m-4 min-h-64 h-fit card relative rounded-xl hover:scale-105 duration-200">
                <div className="rounded-t-xl flex flex-row bg-cover bg-center h-24 border-4 border-b-0 border-gray-500"
                     style={{backgroundImage: `url('${banner}')`}}>
                </div>
                <Image src="/square_image_plc.jpg" alt="Club Logo" height={100} width={100} className="absolute top-12 left-5 rounded-full"/>
                <div className="flex flex-1 flex-col w-full p-5">
                    <p className="text-xl m-1 title text-right">Extra Long {name}</p>
                    <p className="mt-5 ">Lorem ipsum met dolor blah blah blah. {description}</p>
                </div>
            </div>
        </button>
    )
}

export default ClubCard;