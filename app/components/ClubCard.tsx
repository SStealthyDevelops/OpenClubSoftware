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
    if (!logo) logo = '/club_logo_placeholder.jpg';
    /**
     * Temporary placeholder! Add configurable default banner.
     */
    if (!banner) banner = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';
    return (
        <button onClick={() => {
            router.push(`/club/${id}`);
        }}>
            <div className="flex flex-col m-4 min-h-64 h-fit card relative rounded-xl hover:scale-105 duration-200">
                {/*<div className="rounded-t-xl flex flex-row bg-cover bg-center h-24 border-2 bg-blend-overlay border-b-0 border-gray-500 bg-gradient-to-b from-white to-gray-300"*/}
                {/*     style={{backgroundImage: `url('${banner}')`}}*/}
                {/*>*/}
                <div
                    className="relative rounded-t-xl flex flex-row bg-cover bg-center h-24 border-4 border-b-0 border-gray-500"
                    style={{backgroundImage: `url('${banner}')`}}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-60 rounded-t-xl"></div>
            </div>
            <div className="flex flex-row">
                <div className="w-fit h-fit items-start relative -mt-12 ml-5">
                    <Image src={logo} alt="Club Logo" height={100} width={100}
                           className="rounded-full border-4 border-white"/>
                    </div>
                    <p className="text-xl title whitespace-normal text-right mr-3 mt-3 break-words">
                        Extra Extra Extra Long {name}
                    </p>
                </div>
                <p className="m-5 mt-10 whitespace-normal">
                    Lorem ipsum met dolor blah blah blah. {description}
                </p>
            </div>
        </button>
    )
}

export default ClubCard;