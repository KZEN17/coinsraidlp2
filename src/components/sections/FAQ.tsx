import { useState } from 'react';
import iconPlus1 from '../../assets/iconPlus1.png';
import iconPlus2 from '../../assets/iconPlus2.png';

interface FaqItem {
  question: string;
  answer: string;
}

const leftColumn: FaqItem[] = [
  {
    question: 'How do I join?',
    answer:
      'Joining Coinsraid is quick and easy! Just visit coinsraid.com, click "Sign Up", and create your free account. You\'ll instantly receive your FREE Welcome Bonus to kick off your game experience and start playing right away.',
  },
  {
    question: 'What makes a player eligible for prizes?',
    answer:
      "To be eligible to redeem Sweeps Coins for prizes, you must: Be 18 years or older, Reside in an eligible U.S. state (see our T&C). Have a verified account (via our quick KYC process). Once verified, you'll be able to enjoy full access to Coinsraid sweepstakes system and prize redemptions.",
  },
  {
    question: 'How do I track my progress and results?',
    answer:
      "Your player dashboard keeps everything organized — track your Gold Coins, Sweeps Coins, wins, missions, and achievements all in one place. You'll also see your current level, rewards, and daily lootbox progress.",
  },
  {
    question: "What if there's fraud or abuse?",
    answer:
      'Coinsraid maintains a fair and secure environment for all players. Any fraudulent, abusive, or exploitative activity (like creating multiple accounts or using fake information) will result in account suspension and forfeiture of prizes. We actively monitor to keep the adventure safe and fun for everyone.',
  },
];

const rightColumn: FaqItem[] = [
  {
    question: 'Which coin models are available?',
    answer:
      'Coinsraid uses two coin systems: Gold Coins (GC): Used for fun, casual play. These coins have no monetary value and are for entertainment only. Sweeps Coins (SC): Received as a bonus when you buy Gold Coins or through free methods like daily lootboxes or mail-in requests. Sweeps Coins can be used in sweepstakes games and, if eligible, can be redeemed for prizes.',
  },
  {
    question: 'Where can I play Coinsraid?',
    answer:
      'You can play anytime, anywhere — directly through our website at coinsraid.com on desktop or mobile. Coinsraid runs smoothly in your browser, no downloads required!',
  },
  {
    question: 'When do I get paid if I win?',
    answer:
      'Once you redeem your eligible Sweeps Coins for prizes and complete verification, payouts are processed quickly — usually within 3–5 business days. You can choose your preferred withdrawal method.',
  },
  {
    question: 'Can my account be terminated?',
    answer:
      "Yes — Coinsraid reserves the right to suspend or terminate accounts that violate our Terms of Service. This includes fraudulent activity, abuse, or play from restricted states. Don't worry, though — our team always communicates clearly and fairly before taking any action.",
  },
];

function FaqAccordion({
  items,
  openQuestion,
  onToggle,
}: {
  items: FaqItem[];
  openQuestion: string | null;
  onToggle: (question: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openQuestion === item.question;
        return (
          <div
            key={item.question}
            className="rounded-panel bg-[linear-gradient(180deg,#19063C_0%,#531B93_100%)] px-5 py-4"
            style={
              isOpen
                ? {
                    // border-image ignores border-radius, so a rounded gradient
                    // border needs two clipped background layers instead: the
                    // card fill on the padding-box, the gold gradient behind it
                    // on the border-box, showing through the transparent border.
                    border: '1px solid transparent',
                    backgroundImage:
                      'linear-gradient(180deg, #19063C 0%, #531B93 100%), linear-gradient(180deg, #C69101 0%, #C1861A 100%)',
                    backgroundOrigin: 'border-box, border-box',
                    backgroundClip: 'padding-box, border-box',
                  }
                : undefined
            }
          >
            <button
              type="button"
              onClick={() => onToggle(item.question)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-stolzl text-sm font-bold text-white">{item.question}</span>
              <img
                src={isOpen ? iconPlus2 : iconPlus1}
                alt=""
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
            </button>
            {isOpen && <p className="mt-3 font-poppins text-sm text-white/70">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(leftColumn[0].question);

  const toggle = (question: string) => {
    setOpenQuestion((current) => (current === question ? null : question));
  };

  return (
    <section className="mx-auto w-full max-w-content px-5 py-10 sm:px-12 sm:py-14 lg:py-16">
      <h2 className="text-center font-burbank text-2xl font-bold uppercase text-white sm:text-3xl">FAQ</h2>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
        <FaqAccordion items={leftColumn} openQuestion={openQuestion} onToggle={toggle} />
        <FaqAccordion items={rightColumn} openQuestion={openQuestion} onToggle={toggle} />
      </div>
    </section>
  );
}
