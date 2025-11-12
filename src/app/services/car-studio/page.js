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
      whatsappMessage="Hi! I'd like to book detailing at GTA Car Studio. Could you assist?"
    />
  );
}

