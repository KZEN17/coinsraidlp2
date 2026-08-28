import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex justify-center px-5 pt-6 sm:pt-8 lg:pt-10">
      <a href="#top" aria-label="CoinsRaid home">
        <img src={logo} alt="CoinsRaid" className="h-12 w-auto sm:h-14 lg:h-16" />
      </a>
    </header>
  );
}
