"use client";

import {ClubCard, ClubCardById, ClubInfo} from "@/app/components/ClubCard";
import React from "react";
import Footer from "@/app/components/Footer";

/**
 * Landing page with the grid of clubs
 * TODO: Searchbar, Navbar, Category search (and + or search functions), Footer
 */

export default function Home() {

    return (
        <>
            <ClubGrid />
            <Footer/>
        </>
)
}

function ClubGrid() {
    let clubs: ClubInfo[] = [];
    for (let i = 0; i < 50; i++) {
        clubs.push({
            name: `Club Name ${i}`,
            id: i,
            slug: `club_${i}`
        });
    }
    return (
        <>
            <main className="min-h-screen items-center justify-between m-5">
                <div className="grid grid-cols-1 h-fit w-full md:grid-cols-2 xl:grid-cols-4 gap-1">
                    {
                        clubs.map((club, index) => (
                            <ClubCardById id={club.id} key={index}/>
                            // <ClubCard key={index} {...club} />
                        ))
                    }
                </div>
            </main>
        </>
    );
}
