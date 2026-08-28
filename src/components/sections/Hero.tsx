import CtaButton from '../ui/CtaButton';
import heroBg from '../../assets/hero-bg.png';
import heroBgMobile from '../../assets/hero-mobile.png';
import welcomeBonus from '../../assets/welcomeBonus.png';
import title from '../../assets/title.png';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto min-h-[100svh] w-full max-w-content overflow-hidden px-5 text-center md:flex md:min-h-[clamp(480px,32vw,620px)] md:flex-col md:items-center md:justify-center md:py-[clamp(56px,4vw,64px)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Mobile — top-anchored to sit in the empty upper frame area baked into
          hero-mobile.png (the character/chest art fills the lower frame). */}
      <img
        src={welcomeBonus}
        alt="Welcome Bonus"
        className="absolute inset-x-0 top-0 z-10 w-full px-4 md:hidden"
      />
      <div className="absolute inset-x-0 top-[13%] z-10 flex flex-col items-center px-6 md:hidden">
        <img src={title} alt="100,000 GC + 1 Free SC" className="w-[60vw] max-w-[250px]" />
        <CtaButton variant="join" href="#signup" className="mt-4 h-[48px] w-full max-w-[210px]">
          PLAY NOW
        </CtaButton>
      </div>
      <p className="absolute inset-x-0 top-[83%] z-10 px-10 font-poppins text-[10px] font-normal leading-[14px] text-[#BE93E0] md:hidden">
        NO PURCHASE NECESSARY. Open to eligible U.S. residents. Age and
        eligibility restrictions apply. Void where prohibited. See
        Official Rules &amp; T&amp;Cs.
      </p>

      {/* Tablet / desktop — original centered flow */}
      <div className="relative z-10 mt-[clamp(16px,2vw,32px)] hidden flex-col items-center md:flex">
        <img
          src={welcomeBonus}
          alt="Welcome Bonus"
          className="relative z-10 w-[clamp(200px,23.81vw,457.24px)] -mt-[clamp(80px,11vw,112px)]"
        />

        <img
          src={title}
          alt="100,000 GC + 1 Free SC"
          className="w-[clamp(240px,25.5vw,459px)] mt-[clamp(24px,3vw,32px)]"
        />

        <CtaButton
          variant="join"
          href="#signup"
          className="h-[54.46px] w-full max-w-[249.47px] mt-[clamp(24px,3vw,32px)]"
        >
          PLAY NOW
        </CtaButton>

        <p className="max-w-[400px] font-poppins text-[10.54px] font-normal leading-[14.05px] tracking-normal text-[#BE93E0] mt-[clamp(24px,3.5vw,48px)]">
          NO PURCHASE NECESSARY. Open to eligible U.S. residents. Age and
          eligibility restrictions apply. Void where prohibited. See
          Official Rules &amp; T&amp;Cs.
        </p>
      </div>
    </section>
  );
}
