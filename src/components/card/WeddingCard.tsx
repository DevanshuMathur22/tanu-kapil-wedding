"use client";

import GaneshOpening from "@/components/ganesh/GaneshOpening";
import InvitationReveal from "@/components/invitation/InvitationReveal";
import CelebrationScene from "@/components/celebrations/CelebrationScene";
import WeddingDayScene from "@/components/wedding-day/WeddingDayScene";

export default function WeddingCard() {
  const openInvitation = () => {
    document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="wedding-card-shell">
      <div className="wedding-card-book">
        <div className="wedding-card-paper">
          <GaneshOpening onNext={openInvitation} />
          <InvitationReveal />
          <CelebrationScene />
          <WeddingDayScene />
        </div>
      </div>
    </main>
  );
}
