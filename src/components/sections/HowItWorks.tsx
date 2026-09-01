import CtaButton from '../ui/CtaButton';
import stepBg from '../../assets/icons/steps/stepBg.png';
import stepOne from '../../assets/icons/steps/stepOne.png';
import stepTwo from '../../assets/icons/steps/stepTwo.png';
import stepThree from '../../assets/icons/steps/stepThree.png';
import arrowIcon from '../../assets/icons/steps/arrow.png';
import ribbon from '../../assets/icons/steps/ribbon.png'
import titleSignup from '../../assets/icons/steps/titles/signup.png';
import titleClaim from '../../assets/icons/steps/titles/claim.png';
import titlePlay from '../../assets/icons/steps/titles/play.png';

interface Step {
  icon: string;
  title: string;
  titleImg: string;
  description: string;
}

const steps: Step[] = [
  { icon: stepOne, title: 'Signup', titleImg: titleSignup, description: 'Create your free account' },
  { icon: stepTwo, title: 'Claim', titleImg: titleClaim, description: 'Raid your welcome loot-box for instant rewards' },
  { icon: stepThree, title: 'Play', titleImg: titlePlay, description: '2000+ games, to play free' },
];

function StepBadge({ icon, title, titleImg }: { icon: string; title: string; titleImg: string }) {
  return (
    <div className="relative aspect-square w-full">
      <img src={stepBg} alt="" className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <img
        src={icon}
        alt=""
        className="absolute  h-[100%] w-[100%] object-cover"
        aria-hidden="true"
      />
      <img
        src={ribbon}
        alt=""
        className="absolute mt-[40%]  h-[100%] w-[100%] object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-[86%] z-10 flex h-[11%] items-center justify-center">
        <img src={titleImg} alt={title} className="h-full w-auto" />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-content px-12 py-10 sm:py-14 lg:py-16">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {steps.flatMap((step, index) => {
          const nodes = [];
          if (index > 0) {
            nodes.push(
              <img
                key={`arrow-${step.title}`}
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className="h-8 w-8 shrink-0 rotate-90 sm:h-[clamp(26px,2.906vw,55.8px)] sm:w-[clamp(24px,2.632vw,50.53px)] sm:rotate-0"
              />
            );
          }
          nodes.push(
            <div
              key={step.title}
              className="flex flex-col items-center text-center w-[clamp(213px,58vw,233.13px)] sm:w-[clamp(213px,15.556vw,298.66px)]"
            >
              <StepBadge icon={step.icon} title={step.title} titleImg={step.titleImg} />
              <div className="box-border flex w-[212.58px] max-w-full flex-row items-center justify-between gap-[10.54px] rounded-b-[21.0821px] bg-[linear-gradient(180deg,#19063C_0%,#390567_100%)] px-[21.0821px] py-[10.541px]">
                <p className="font-stolzl text-[15px] font-normal leading-[21.08px] tracking-normal text-center text-white/80">{step.description}</p>
              </div>
            </div>
          );
          return nodes;
        })}
      </div>

      <div className="mt-10 flex justify-center sm:mt-14">
        <CtaButton variant="join" href="#signup" className="w-full max-w-[280px] h-14">
          JOIN NOW
        </CtaButton>
      </div>
    </section>
  );
}
