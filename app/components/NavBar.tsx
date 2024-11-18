export default function NavBar() {
  return (
    <nav className="bg-cyan-900 text-white p-4">
      <ul className="flex justify-center space-x-8">
        <li><a href="/" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-300">About</a></li>
        <li><a href="/FAQ" className="hover:text-yellow-300">FAQ</a></li>
        <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  );
}