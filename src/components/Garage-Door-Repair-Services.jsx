import ServiceCard from "./service-card";

export default function GarageDoorRepairServices() {
  const services = [
    {
      title: "BROKEN SPRING REPAIR",
      image: "/broken-spring-repair.jpg",
      services: ["Spring Repair", "Torsion & Extension", "Spring Adjustment", "System Conversion"],
    },
    {
      title: "OPENER REPAIR/INSTALLATION",
      image: "/Tolbert-garage-Door-repair-Garage-Door-Opener-Repair-2.jpg",
      services: ["Opener Repair", "Opener Installation", "Keypads & Remotes", "Sensors Replacement"],
    },
    {
      title: "DOOR OFF TRACK",
      image: "/DOOR OFF TRACK.png",
      services: ["Door Off Track Repair", "Balance & Adjustment", "Panel Maintenance", "Garage Door Repair"],
    },
    {
      title: "BROKEN CABLE REPAIR",
      image: "/door-Broken-Cables-.png",
      services: ["Cable Installation", "Loose Cable Adjustment", "Cable Drums", "Cable Maintenance"],
    },
    {
      title: "NEW GARAGE DOOR INSTALLATION",
      image: "/Tolbert-garage-door-service-dallas.png",
      services: ["New Installation", "Door Replacement", "Panel Replacement", "Bent Rails & Off Tracks"],
    },
    {
      title: "GARAGE DOOR MAINTENANCE",
      image: "/tolbert-garage-door-maintenance-in-dallas.jpg",
      services: ["Lubricate Moving Parts", "Test Door Balance", "Clean and Paint Door", "Clear the Tracks"],
    },
    {
      title: "REMOTE REPAIR/PROGRAM",
      image: "/Garage REMOTE REPAIR_PROGRAM.png.png",
      services: ["Remote Programming", "New Remote", "Remote Program to Vehicle", "Remote Replacement"],
    },
    {
      title: "GARAGE DOOR ROLLER REPAIR",
      image: "/Tolbert-garage-door_garage_door_rollers_out.jpg",
      services: ["Roller Lubrication", "Roller Replacement", "Roller Alignment", "Roller Installation"],
    },
  ];
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="text-green-500">Tolbert Garage Door</span> Repair Door Services
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Professional <span className="text-green-500">Garage Door</span> Solutions in Dallas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
