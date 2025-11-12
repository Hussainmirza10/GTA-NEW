import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Modify Services | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Performance Upgrades",
    description:
      "Stage 1-3 ECU tuning, forced induction packages, and drivetrain upgrades dialled in on our dyno.",
  },
  {
    title: "Exterior Transformation",
    description:
      "Wide-body conversions, carbon aero kits, forged wheels, and paint protection film applied in-house.",
  },
  {
    title: "Interior Bespoke",
    description:
      "Hand-stitched leather, Alcantara conversions, ambient lighting, and infotainment retrofits.",
  },
];

export default function ModifyServicePage() {
  return (
    <ServiceDetail
      title="Modify Programme"
      subtitle="Tailor-Made Upgrades"
      description="Unlock the full potential of your vehicle with performance, styling, and handling packages engineered by GTA specialists."
      image="/assets/modify1.jpg"
      highlights={highlights}
      whatsappMessage="Hi! I'm interested in your modify programme. Could you guide me through the upgrade options?"
    />
  );
}

