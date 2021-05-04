import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>RupamTesting</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>about</a></Link>
            <Link href='/subPages'><a>Sub-Listing</a></Link>

        </nav>
                );
}
 
export default Navbar;