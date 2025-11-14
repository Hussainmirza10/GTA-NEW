import ServiceDetail from "src/components/services/service-detail";

export const metadata = {
  title: "Car Studio Detailing | Garage Tuned Autos",
};

const highlights = [
  {
    title: "Concours Detailing",
    description:
      "Multi-stage paint correction, wheel-off cleaning, and interior deep treatments tailored for show standards.",
  },
  {
    title: "Long-Term Protection",
    description:
      "Ceramic coatings, graphene sealants, and hydrophobic packages keep finishes flawless in UAE conditions.",
  },
  {
    title: "Convenience",
    description:
      "On-site detailing lounge, vehicle collection, and return delivery options ensure a seamless experience.",
  },
];

export default function CarStudioServicePage() {
  return (
    <ServiceDetail
      title="Car Studio Detailing"
      subtitle="Showroom Finish"
      description="Give your vehicle the GTA spa treatment with concours-level detailing, coating, and interior rejuvenation."
      image="/assets/carstudio.jpg"
      highlights={highlights}
      actionSections={[
        {
          badge: "Phase One",
          title: "Step 1 Detailing",
          description:
            "Pre-wash, foam bath, and decontamination to strip away grime while preserving delicate finishes.",
          image: "/assets/detailing-step1.jpg",
        },
        {
          badge: "Correction",
          title: "Step 2 Detailing",
          description:
            "Dual-action correction, clay bar treatment, and wheel restoration to level paint and metal surfaces.",
          image: "/assets/detailing-step2.jpg",
        },
        {
          badge: "Protection",
          title: "Step 3 Detailing",
          description:
            "Ceramic or graphene coating application, glass polishing, and tire dressing for lasting protection.",
          image: "/assets/detailing-step3.jpg",
        },
        {
          badge: "Everyday Care",
          title: "General Service",
          description:
            "Maintenance wash programmes, interior refresh, and quick polish options tailored to your driving schedule.",
          image: "/assets/detailing-general.jpg",
        },
      ]}
      whatsappMessage="Hi! I'd like to book detailing at GTA Car Studio. Could you assist?"
    />
  );
}


