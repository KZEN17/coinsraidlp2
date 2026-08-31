import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="relative z-20 flex justify-center px-5 pt-6 sm:pt-8 lg:pt-10">
      <a href="#top" aria-label="CoinsRaid home">
        <img
          src={logo}
          alt="CoinsRaid"
          className="w-[clamp(165px,10.94vw,210px)] h-[clamp(72px,4.79vw,92px)] object-cover"
        />
      </a>
    </header>
  );
}
