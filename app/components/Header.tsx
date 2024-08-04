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
import {TextField} from "@mui/material";

export default function Header() {
    return (
        <div className="w-screen h-48 grid grid-cols-2 flex-row items-center">
            <div className="h-full flex"> {/*LOGO PLACEHOLDER*/}
                <h1 className="title m-10 text-9xl">LOGO</h1>
            </div>
            <div className="h-fit p-12 rounded-xl flex items-center justify-end m-10 bg-gray-500 bg-opacity-15">
                <SearchBar />
                <Navbar />
            </div> {/* SEARCHBAR */}
        </div>
    )
}

function SearchBar() {
    return (
        <>
            <textarea maxLength={32} wrap="off" name="clubSearch" placeholder="Search for a Club"
                      className="resize-none rounded-xl bg-opacity-0 bg-white font-inter text-xl flex relative p-5 h-16 "/>
        </>
    )
}

function Navbar() {
    return (
        <>
        </>
    )
}