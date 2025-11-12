import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Installation Services | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Certified Technicians",
    description:
      "Factory-trained specialists install OEM and premium aftermarket components with manufacturer-backed warranties.",
  },
  {
    title: "Electronics & Protection",
    description:
      "Infotainment upgrades, dash cameras, radar detection, ceramic coating, and paint protection film, all calibrated in-house.",
  },
  {
    title: "Same-Day Appointments",
    description:
      "Dedicated bays and rapid scheduling keep you on the road with minimal downtime.",
  },
];

export default function InstallationServicePage() {
  return (
    <ServiceDetail
      title="Installation Studio"
      subtitle="Precision Fitment"
      description="From performance hardware to lifestyle and protection upgrades, GTA installs every component with absolute precision."
      image="/assets/installation.jpg"
      highlights={highlights}
      whatsappMessage="Hi! I'm looking to book an installation at GTA. Could you share availability?"
    />
  );
}

