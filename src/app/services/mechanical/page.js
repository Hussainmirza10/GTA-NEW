import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Mechanical Services | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Dealer-Level Diagnostics",
    description:
      "OEM tooling and software diagnose complex electrical, engine, and drivetrain concerns with precision.",
  },
  {
    title: "Preventative Maintenance",
    description:
      "Scheduled servicing, fluid analysis, and component health checks keep performance cars dependable.",
  },
  {
    title: "Performance Support",
    description:
      "Track prep, brake upgrades, suspension tuning, and post-event inspections handled by GTA master technicians.",
  },
];

export default function MechanicalServicePage() {
  return (
    <ServiceDetail
      title="Mechanical Workshop"
      subtitle="Master Technician Support"
      description="From routine servicing to complex rebuilds, GTA's mechanical division keeps your vehicle performing at its peak."
      image="/assets/mechanical.jpg"
      highlights={highlights}
      whatsappMessage="Hi! I need mechanical support from GTA. Could you help me schedule a workshop visit?"
    />
  );
}



