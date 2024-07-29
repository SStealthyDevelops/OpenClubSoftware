import React from "react";

export type ClubInfo = {
    id: number,
    name: string,
    slug: string,
    logo?: string,
    banner?: string,
    description?: string ,
}


const ClubCard:React.FC<ClubInfo> = ({id, name, slug, logo, banner, description}) => {
    if (!description) description = 'No description found.';
    if (!banner) banner = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';
    return (
        <div className="flex flex-col m-5 pb-5 min-h-64 card relative">
            <div className="flex flex-row bg-red-400 bg-cover bg-center" style={{backgroundImage: `url('${banner}')`}}>
                <p className="text-xl m-5">{name}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ClubCard;