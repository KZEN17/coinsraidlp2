import type { ReactNode } from 'react';
import backgroundOverlay from '../../assets/Background.png';

// Single background for the entire page (hero, steps, footer all sit on
// top of it), not scoped to any one section.
// TODO: swap in a dedicated mobile crop below md once one is exported —
// reusing the same desktop image on both layers for now.
function BackgroundImageLayer() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundColor: '#0C031C', backgroundImage: `url(${backgroundOverlay})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundColor: '#0C031C', backgroundImage: `url(${backgroundOverlay})` }}
      />
      {/* Background.png — layered in front of the base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundOverlay})` }}
      />
    </>
  );
}

export default function PageBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-page-deep">
      <BackgroundImageLayer />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
