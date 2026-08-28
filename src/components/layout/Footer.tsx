import logo from '../../assets/logo.png';
import instagramIcon from '../../assets/icons/social/social-instagram.svg';
import facebookIcon from '../../assets/icons/social/social-facebook.svg';
import discordIcon from '../../assets/icons/social/social-discord.svg';
import crownIcon from '../../assets/icons/social/social-crown.svg';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: instagramIcon },
  { href: 'https://facebook.com', label: 'Facebook', icon: facebookIcon },
  { href: 'https://discord.com', label: 'Discord', icon: discordIcon },
  { href: 'https://discord.com', label: 'Crown', icon: crownIcon },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-bg-page-deep border-t border-white/10">
      <div className="mx-auto  max-w-content px-5 py-8 sm:px-8 sm:py-10 lg:px-0">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4 sm:text-left lg:flex-nowrap lg:justify-between">
          <img src={logo} alt="CoinsRaid" className="h-12 w-auto sm:h-14 lg:h-16" />

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="font-sora text-sm font-semibold text-white">Find Us at:</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <img src={social.icon} alt="" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
            <a href="#" className="text-gray-light">
              Terms and conditions
            </a>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <p className="font-poppins text-xs leading-relaxed text-gray-light">
          Coinsraid.com is operated by Trigger Puppy LLC. registration number:
          3906 LLC 2024, registered address: Suite 305, Griffith Corporate
          Centre, Beachmont, Kingstown, St. Vincent and the Grenadines. Contact
          us support@questplay.com. Coinsraid.com is licensed and regulated by
          the Government of the Autonomous Island of Anjouan, Union of Comoros
          and operates under License No. ALSI-202502016-Fll. Coinsraid.com has
          passed all regulatory compliance and is legally authorized to conduct
          gaming operations for any and all games of chance and wagering.
        </p>
        <p className="mt-4 font-poppins text-xs text-gray-light">
          © {new Date().getFullYear()} CoinsRaid | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
