import GaneshOpening from "@/components/ganesh/GaneshOpening";
import InvitationReveal from "@/components/invitation/InvitationReveal";
import CelebrationScene from "@/components/celebrations/CelebrationScene";
import WeddingDayScene from "@/components/wedding-day/WeddingDayScene";

export default function Home() {
  return (
    <main>
      <GaneshOpening />
      <InvitationReveal />
      <CelebrationScene />
      <WeddingDayScene />
    </main>
  );
}
