import Image from "next/image";

export function ServiceBadges() {
  const badges = [
    {
      title: "FULLY INSURED",
      image: "/hero/FULLY-INSURED-BADGE-V1.png",
      alt: "Fully Insured Badge",
    },
    {
      title: "MILITARY DISCOUNTS",
      image: "/hero/MILITARY-DISCOUNTS-BADGE-V1.png",
      alt: "Military Discounts Badge",
    },
    {
      title: "OFFICIALLY LICENSED",
      image: "/hero/OFFICIALLY-LICENSED-BADGEV1-909x1024.png",
      alt: "Officially Licensed Badge",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 max-w-3xl mx-auto">
      {badges.map((badge) => (
        <div key={badge.title} className="flex flex-col items-center text-center">
          <div className=" mb-4">
            <Image width={160} height={160} src={badge.image || "/placeholder.svg"} alt={badge.alt} className="object-cover w-full h-44" />
          </div>
          <h3 className="font-bold text-green-100">{badge.title}</h3>
        </div>
      ))}
    </div>
  );
}
