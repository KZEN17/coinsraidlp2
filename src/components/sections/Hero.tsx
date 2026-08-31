import CtaButton from '../ui/CtaButton';
import heroBg from '../../assets/hero-bg.png';
import heroBgMobile from '../../assets/hero-mobile.png';
import welcomeBonus from '../../assets/welcomeBonus.png';
import title from '../../assets/title.png';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto h-full w-full overflow-hidden px-5 text-center"
      style={{ containerType: 'size' }}
    >
      {/* Mobile — the frame background and its text/button overlay live inside
          one aspect-ratio-locked stage (matching hero-mobile.png's native
          375x648), cover-scaled and center-cropped to always fill the screen
          edge-to-edge. This keeps the overlay's hand-tuned percentages
          (top-0 / top-13% / top-83%) locked to the frame graphic itself
          instead of the section's own (header-dependent) box height, so nothing
          drifts apart when the available height changes across devices. */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
        style={{ aspectRatio: '375 / 648', width: 'max(100cqw, calc(100cqh * 375 / 648))' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgMobile})` }}
        />
        <img
          src={welcomeBonus}
          alt="Welcome Bonus"
          className="absolute inset-x-0 top-0 z-10 w-full px-4"
        />
        <div className="absolute inset-x-0 top-[13%] z-10 flex flex-col items-center px-6">
          <img src={title} alt="100,000 GC + 1 Free SC" className="w-[60vw] max-w-[250px]" />
          <CtaButton variant="join" href="#signup" className="mt-4 h-[48px] w-full max-w-[210px]">
            PLAY NOW
          </CtaButton>
        </div>
        <p className="absolute inset-x-0 top-[83%] z-10 px-10 font-poppins text-[10px] font-normal leading-[14px] text-[#BE93E0]">
          NO PURCHASE NECESSARY. Open to eligible U.S. residents. Age and
          eligibility restrictions apply. Void where prohibited. See
          Official Rules &amp; T&amp;Cs.
        </p>
      </div>

      {/* Tablet / desktop — the whole composition (frame, ribbon, GC amount,
          CTA, disclaimer) lives inside one aspect-ratio-locked stage sized to
          the original design (1316x620), so every piece scales together at
          any viewport instead of the background and foreground drifting
          apart. Letterboxes on the page's own dark background rather than
          cropping or stretching anything out of proportion. */}
      <div
        className="relative z-10 mx-auto hidden md:block"
        style={{
          aspectRatio: '1316 / 620',
          width: 'min(100cqw, calc(100cqh * 1316 / 620))',
          containerType: 'size',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <img
          src={welcomeBonus}
          alt="Welcome Bonus"
          className="absolute left-1/2 top-[6.28%] z-10 w-[34.74%] -translate-x-1/2"
        />

        <img
          src={title}
          alt="100,000 GC + 1 Free SC"
          className="absolute left-1/2 top-[27.26%] z-10 w-[34.88%] -translate-x-1/2"
        />

        <CtaButton
          variant="join"
          href="#signup"
          className="absolute left-1/2 top-[59.76%] z-10 w-[18.96%] -translate-x-1/2 whitespace-nowrap [font-size:2.6cqh] [height:8.78cqh]"
        >
          PLAY NOW
        </CtaButton>

        <p className="absolute left-1/2 top-[76.28%] z-10 w-[30.4%] -translate-x-1/2 font-poppins font-normal text-[#BE93E0] [font-size:1.7cqh] [line-height:2.3cqh]">
          NO PURCHASE NECESSARY. Open to eligible U.S. residents. Age and
          eligibility restrictions apply. Void where prohibited. See
          Official Rules &amp; T&amp;Cs.
        </p>
      </div>
    </section>
  );
}
