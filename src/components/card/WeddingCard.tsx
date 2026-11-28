"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import GaneshOpening from "@/components/ganesh/GaneshOpening";

const InvitationReveal = dynamic(() => import("@/components/invitation/InvitationReveal"));
const CelebrationScene = dynamic(() => import("@/components/celebrations/CelebrationScene"));
const WeddingDayScene = dynamic(() => import("@/components/wedding-day/WeddingDayScene"));

export default function WeddingCard() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [opened]);

  return (
    <main className="wedding-card-shell">
      <div className="wedding-card-book">
        <div className="wedding-card-paper">
          {!opened ? (
            <GaneshOpening onNext={() => setOpened(true)} />
          ) : (
            <>
              <InvitationReveal />
              <CelebrationScene />
              <WeddingDayScene />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
