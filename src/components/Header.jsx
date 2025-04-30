import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-center items-center gap-5 pt-5 md:gap-10 z-[9999]">
            <div className="line w-2/5"></div>
            <Link to="/">
                <img className="size-25 md:size-28"src="favicon/favicon.svg" alt="logo" />
            </Link>
            <div className="line w-2/5"></div>
        </header>
    )
}

export default Header;