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

const actionSections = [
  {
    badge: "Roadside Ops",
    title: "Towing Support",
    description:
      "Need transport to the workshop or a flatbed on standby? Choose a booking window or flag an emergency pickup.",
    image: "/assets/towing-cute.png",
    actions: [
      {
        label: "Book",
        whatsappMessage:
          "Hi GTA, I'd like to book towing support. Please schedule a slot for my vehicle pickup.",
      },
      {
        label: "Urgent",
        variant: "outlined",
        color: "secondary",
        whatsappMessage:
          "URGENT: I need immediate towing assistance. Please dispatch a flatbed as soon as possible.",
      },
    ],
  },
  {
    badge: "Mobile Crew",
    title: "Call A Mechanic",
    description:
      "Mechanic stuck on speed dial. Flag a routine visit or request rapid deployment for breakdown diagnostics.",
    image: "/assets/mobile-mechanic-cute.png",
    actions: [
      {
        label: "Book",
        whatsappMessage:
          "Hi GTA, I'd like to book a mobile mechanic visit. Please confirm availability.",
      },
      {
        label: "Urgent",
        variant: "outlined",
        color: "secondary",
        whatsappMessage:
          "URGENT: Need a mobile mechanic immediately. Please dispatch your team right now.",
      },
    ],
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
      actionSections={actionSections}
    />
  );
}


