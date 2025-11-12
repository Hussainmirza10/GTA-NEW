import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Towing Services | Garage Tuned Autos",
};

const highlights = [
  {
    title: "24/7 Availability",
    description:
      "Rapid deployment of flatbed and covered transporters across the UAE any hour of the day.",
  },
  {
    title: "Supercar Safe",
    description:
      "Low-angle ramps, soft straps, and insured drivers trusted by collectors and manufacturers.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Live GPS updates and concierge communication from pick-up to drop-off ensure peace of mind.",
  },
];

export default function TowServicePage() {
  return (
    <ServiceDetail
      title="Premium Towing"
      subtitle="Flatbeds & Covered Transport"
      description="Emergency recovery or scheduled movement for supercars, classics, and daily drivers with full insurance cover."
      image="/assets/towing.jpg"
      highlights={highlights}
      whatsappMessage="Hi! I need towing assistance. Can you help me arrange transport?"
    />
  );
}

