import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "LEDs | Garage Tuned Autos",
};

const highlights = [
  {
    title: "OEM-Level Integration",
    description:
      "Plug-and-play harnesses, CAN-safe modules, and coding support so every LED upgrade works seamlessly with factory electronics.",
  },
  {
    title: "Premium Optics",
    description:
      "Crystal lenses, laser-cut diffusers, and calibrated color temperature for vivid output without glare.",
  },
  {
    title: "Certified Installation",
    description:
      "ESD-safe work bays and warranty-backed installs handled by GTA lighting specialists.",
  },
];

const lightingSections = [
  {
    badge: "Primary Vision",
    title: "Head Lights",
    description:
      "Bi-LED projectors, DRL halos, and adaptive beam retrofits matched to your vehicle's housing.",
    image: "/assets/LEDs.webp",
    actions: [
      {
        label: "High Beam",
        whatsappMessage:
          "Hi GTA, I'm interested in upgrading my headlight high-beam LEDs. Could you share the options?",
      },
      {
        label: "Low Beam",
        variant: "outlined",
        whatsappMessage:
          "Hi GTA, I'd like to book a low-beam LED upgrade. Please let me know availability.",
      },
    ],
  },
  {
    badge: "Rear Signature",
    title: "Tail Lights",
    description:
      "Sequential turn signals, smoked housings, and OEM+ LED conversions that sharpen rear visibility.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Safety Assist",
    title: "Reverse Lights",
    description:
      "High-output modules that flood the path behind you paired with integrated parking sensor lighting.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "All-Weather",
    title: "Fog Lights",
    description:
      "Wide-angle LED fogs with amber or pure white output for maximum visibility in harsh conditions.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Night Presence",
    title: "Parking Lights",
    description:
      "Low-draw accent LEDs that keep your vehicle visible and stylish during dusk drives.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Signal Clarity",
    title: "Indicator Lights",
    description:
      "Instant-on LED indicators with sequential effects and resistor-free integration.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Plate Glow",
    title: "Plate Lights",
    description:
      "Cool-white units that keep your plate crisp without triggering bulb-out warnings.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Adventure Ready",
    title: "Hummer Lights",
    description:
      "Roof-bar clusters, grille LED pods, and off-road beams inspired by Hummer builds.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Galaxy Effect",
    title: "Star Lights",
    description:
      "Fiber-optic headliners and bespoke constellation mapping for a starlit cabin experience.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Mood Control",
    title: "Ambiance Lights",
    description:
      "RGB strips, footwell glow, and door-panel blades synced with your infotainment system.",
    image: "/assets/LEDs.webp",
  },
  {
    badge: "Interior Clarity",
    title: "Cabin Light",
    description:
      "Map, dome, and cargo LEDs that brighten the cabin without harsh glare.",
    image: "/assets/LEDs.webp",
  },
];

export default function LEDsServicePage() {
  return (
    <ServiceDetail
      title="LED Lighting"
      subtitle="High-Output Visual Upgrades"
      description="Transform every beam, strip, and accent with GTA's LED catalogue—from safety-critical headlamps to immersive cabin glow."
      image="/assets/LEDs.webp"
      highlights={highlights}
      actionSections={lightingSections}
      whatsappMessage="Hi! I'm interested in LED lighting upgrades. Can you help me pick the right package?"
    />
  );
}


