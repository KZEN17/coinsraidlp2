import CtaButton from '../ui/CtaButton';
import promoBanner from '../../assets/promoBanner.png';
import promoBannerMobile from '../../assets/promoBannerMobile.png';

export default function PromoBanner() {
  return (
    <section className="mx-auto w-full max-w-content px-5 py-10 sm:px-12 sm:py-14 lg:py-16">
      <img
        src={promoBannerMobile}
        alt="Get 100,000 GC + 1 Free SC — Secure, Fun, Free to play"
        className="mx-auto w-full max-w-[375px] md:hidden"
      />
      <img
        src={promoBanner}
        alt="Get 100,000 GC + 1 Free SC — Secure, Fun, Free to play"
        className="hidden w-full rounded-panel md:block"
      />

      <div className="mt-10 flex justify-center">
        <CtaButton variant="join" href="#signup" className="w-full max-w-[280px] h-14">
          JOIN NOW
        </CtaButton>
      </div>
    </section>
  );
}
