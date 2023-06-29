import Link from "next/link";

const NavBar = () => {
    return (
        <div className="justify-between space-x-4 text-blue-600">
        <Link href="/products">Products</Link>
        <Link href="/countries">Countries</Link>
        </div>
     );
}

export default NavBar;