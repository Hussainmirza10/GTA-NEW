import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Call A Mechanic | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Rapid Response",
    description:
      "Mobile technicians arrive within minutes equipped with diagnostics, tools, and consumables to get you moving.",
  },
  {
    title: "On-Site Repairs",
    description:
      "Battery replacement, tyre support, minor mechanical fixes, and inspection reports completed at your location.",
  },
  {
    title: "Transparent Communication",
    description:
      "Concierge updates, cost approvals, and escalation to workshop or towing when needed.",
  },
];

export default function CallMechanicServicePage() {
  return (
    <ServiceDetail
      title="Call A Mechanic"
      subtitle="Mobile GTA Technicians"
      description="Stranded or need a quick inspection? GTA dispatches skilled mechanics with a mobile tool kit and parts to wherever you are."
      image="/assets/callmech.jpg"
      highlights={highlights}
      whatsappMessage="Hi! I need a mobile mechanic from GTA. Could you send help?"
    />
  );
}

