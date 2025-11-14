import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Exterior Modification | Garage Tuned Autos",
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
      title="Exterior Modification"
      subtitle="Concierge Styling & Protection"
      description="Sculpt the exterior with GTA's fabrication lab—wraps, tint, and paint programs calibrated for daily drivers and show builds alike."
      image="/assets/modify1.jpg"
      highlights={[]}
      actionSections={[
        {
          badge: "Signature Finish",
          title: "PPF & Wraps",
          description:
            "Self-healing paint protection film, satin and chrome delete wraps, and show-car liveries designed in-house.",
          image: "/assets/ppf-wraps.jpg",
        },
        {
          badge: "Cabin Comfort",
          title: "Window Tints",
          description:
            "Ceramic heat rejection, UV protection, and privacy tint packages calibrated to local regulations.",
          image: "/assets/window-tint.jpg",
        },
        {
          badge: "Colour Lab",
          title: "Paint Studio",
          description:
            "Custom finishes executed in controlled booths with OEM-grade cleansers and curing. Choose from dedicated programmes for rim paint, full body respray, or brake caliper accents—each colour-matched and ceramic sealed for lasting brilliance.",
          image: "/assets/paint-studio.jpg",
          actions: [
            {
              label: "Body Paint",
              whatsappMessage:
                "Hi GTA, I'm interested in a body respray. Can you arrange a consultation?",
            },
            {
              label: "Brake Caliper Paint",
              variant: "outlined",
              whatsappMessage:
                "Hi GTA, I'd like your team to paint my brake calipers. What's the earliest booking?",
            },
            {
              label: "Rim Paint",
              variant: "outlined",
              color: "secondary",
              whatsappMessage:
                "Hi GTA, I'd like to schedule rim painting. Please share available slots.",
            },
          ],
        },
      ]}
      whatsappMessage="Hi! I'm interested in your exterior modification services. Could you guide me through wraps, tint, and paint options?"
    />
  );
}


