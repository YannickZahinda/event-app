import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    Myrja Events
                </h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">A propos</Link></li>
                    <li><Link to="/manage-events" className="hover:underline">Manage Events</Link></li>
                    <li><Link to="/services" className="hover:underline">Services</Link></li>
                    <li><Link to="/planning" className="hover:underline">Communications/planning</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;