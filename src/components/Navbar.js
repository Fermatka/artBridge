export default function Navbar() {
  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#home" className="text-white uppercase">
            Artbridge
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-white uppercase">
            Jak To Działa
          </a>
        </li>
        <li>
          <a href="#why-us" className="text-white uppercase">
            Dlaczego My
          </a>
        </li>
        <li>
          <a href="#our-team" className="text-white uppercase">
            Nasz Team
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white uppercase">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
