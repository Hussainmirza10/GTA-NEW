import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Interior Modification | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Handcrafted Interiors",
    description:
      "Leather, Alcantara, and custom stitching executed by GTA's upholstery artisans for a factory-plus finish.",
  },
  {
    title: "Integrated Electronics",
    description:
      "Ambient lighting, audio upgrades, and control interfaces coded to your vehicle's CAN network.",
  },
  {
    title: "Detail-Oriented Fitment",
    description:
      "Trim removal and reassembly performed with OEM torque specs and panel protection.",
  },
];

const interiorSections = [
  {
    badge: "Signature Roof",
    title: "Blacked-Out Roof",
    description:
      "Gloss or satin blackout wraps, panoramic glass tint, and roof accents to complete the exterior contrast.",
    image: "/assets/installation-roof.jpg",
  },
  {
    badge: "Mood Lighting",
    title: "Ambiance Lights",
    description:
      "Footwell, door card, and dashboard illumination synced with your infotainment and drive modes.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Starry Sky",
    title: "Star Lights",
    description:
      "Fiber-optic headliners with bespoke constellations, animated shooting stars, and voice control integration.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Driver Touchpoints",
    title: "Steering Mods",
    description:
      "Carbon overlays, flat-bottom conversions, paddle shifters, and mapped buttons tailored to your driving style.",
    image: "/assets/steering-mods.jpg",
  },
  {
    badge: "Posh Cabin",
    title: "Custom Poshish",
    description:
      "Hand-cut leather and Alcantara re-trims for seats and door cards with contrast piping, embossing, and perforation patterns.",
    image: "/assets/poshish.jpg",
  },
];

export default function InteriorModificationServicePage() {
  return (
    <ServiceDetail
      title="Interior Modification"
      subtitle="Tailored Cabin Experiences"
      description="Transform the inside of your build with GTA's upholstery, lighting, and driver-focused upgrades crafted to your brief."
      image="/assets/installation.jpg"
      highlights={highlights}
      actionSections={interiorSections}
      whatsappMessage="Hi! I'm interested in interior modification services. Can you help me plan the upgrades?"
    />
  );
}


