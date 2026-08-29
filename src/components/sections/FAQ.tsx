import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const leftColumn: FaqItem[] = [
  {
    question: 'How do I join?',
    answer:
      'Joining Coinsraid is quick and easy! Just visit coinsraid.com, click "Sign Up", and create your free account. You\'ll instantly receive your FREE Welcome Pack to kick off your game experience and start playing right away.',
  },
  {
    question: 'What makes a player eligible for prizes?',
    answer: 'Eligibility details will be listed here.',
  },
  {
    question: 'How do I track my progress and results?',
    answer: 'Progress and results tracking details will be listed here.',
  },
  {
    question: "What if there's fraud or abuse?",
    answer: 'Fraud and abuse policy details will be listed here.',
  },
];

const rightColumn: FaqItem[] = [
  {
    question: 'Which coin models are available?',
    answer: 'Coin model details will be listed here.',
  },
  {
    question: 'Where can I play Coinsraid?',
    answer: 'Availability details will be listed here.',
  },
  {
    question: 'When do I get paid if I win?',
    answer: 'Payout details will be listed here.',
  },
  {
    question: 'Can my account be terminated?',
    answer: 'Account termination policy details will be listed here.',
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-panel bg-gradient-card-glass px-5 py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-stolzl text-sm font-bold text-white">{item.question}</span>
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow-magenta text-white"
                aria-hidden="true"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && <p className="mt-3 font-poppins text-sm text-white/70">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="mx-auto w-full max-w-content px-5 py-10 sm:px-12 sm:py-14 lg:py-16">
      <h2 className="text-center font-burbank text-2xl font-bold uppercase text-white sm:text-3xl">FAQ</h2>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
        <FaqAccordion items={leftColumn} />
        <FaqAccordion items={rightColumn} />
      </div>
    </section>
  );
}
