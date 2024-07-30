"use client";

import ClubCard, {ClubInfo} from "@/app/components/ClubCard";
import React from "react";


export default function Home() {
  let clubs: ClubInfo[] = [];
  for (let i = 0; i < 50; i++) {
    clubs.push({
      name: `Club Name ${i}`,
      id: i,
      slug: `Club ${i}`
    });
  }
  return (
      <main className="flex flex-1 min-h-screen items-center justify-between m-5">
        <div className="grid grid-cols-1 h-fit w-full md:grid-cols-2 xl:grid-cols-4 gap-1">
          {
            clubs.map((club, index) => (
                <ClubCard {...club} key={index}/>
            ))
          }
        </div>
      </main>
  );
}
