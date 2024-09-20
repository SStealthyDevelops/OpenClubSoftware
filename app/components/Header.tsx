/**
 *
 * @constructor
 *
 * Include:
 * - Logo
 * - Searchbar
 * - Category selector (exclusive + singular search)
 * -
 */
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div className="w-screen h-48 grid grid-cols-2 flex-row items-center bg-gray-500 bg-opacity-15">
            <div className="h-full flex"> {/*LOGO PLACEHOLDER*/}
                <h1 className="title m-10 text-9xl">LOGO</h1>
            </div>
            <div className="p-12 rounded-xl flex items-center justify-end gap-12">
                <SearchBar onUpdate={(v) => console.log(v) }/>
                <Navbar />
            </div> {/* SEARCHBAR */}
        </div>
    )
}


interface SearchBarProps {
    onUpdate: (value: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onUpdate }) => {
    "use client";
    return (
            <textarea
                maxLength={32}
                wrap="off"
                autoCapitalize="off"
                autoComplete="off"
                name="clubSearch"
                placeholder="Search for a Club"
                className="resize-none rounded-xl bg-opacity-15 bg-gray-500 border-2 border-[--accent-color] montserrat text-xl p-5 h-16 flex items-center justify-center focus:outline-none focus:border-[--accent-color] focus:scale-105 duration-500 focus:shadow-lg"
                onKeyUp={(e) => {
                    onUpdate((e.target as HTMLTextAreaElement).value);
                }}
            />
    )
}

function Navbar() {
    return (
        <Link href="/about">
            <p className="title hover:underline hover:scale-105 decoration-2">About</p>
        </Link>
    )
}