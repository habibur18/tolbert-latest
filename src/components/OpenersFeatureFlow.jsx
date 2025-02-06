import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function OpenersFeatureFlow() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <Card className="overflow-hidden border-green-500/20">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Image src="/openers-flow1.png" alt="Modern garage with smart opener" width={600} height={400} className="object-center w-full h-[300px] md:h-[400px]" />
          <CardContent className="p-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-green-600">Next Gen Openers</h2>
            <p className="text-muted-foreground">
              The next generation of <span className="text-green-500 font-semibold">LiftMaster openers</span> are transforming the garage space with new features that meet the needs of today's busy homeowners. These are not your father's <span className="text-green-500 font-semibold">garage door</span> openers. Their <span className="text-green-500 font-semibold">sleek, contemporary design</span>—including a<span className="text-green-500 font-semibold"> modern lighting experience</span>—elevates the garage into a notable and more functional extension of the <span className="text-green-500 font-semibold">smart home</span>.
            </p>
            <Button className="bg-green-600 hover:bg-green-500 text-white">LEARN MORE</Button>
          </CardContent>
        </div>
      </Card>

      {/* Battery Backup Section */}
      <Card className="overflow-hidden bg-green-50 border-green-500/20">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-green-600">
              Battery Backup <br />
              Garage Door Openers
            </h2>
            <p className="text-muted-foreground">
              During a <span className="text-green-500 font-semibold">power outage</span>, access to or from your garage may be critical. Keep your family <span className="text-green-500 font-semibold">safe</span> with a <span className="text-green-500 font-semibold">garage door</span> opener with <span className="text-green-500 font-semibold">Battery Backup</span>.
            </p>
            <Button className="bg-green-600 hover:bg-green-500 text-white">LEARN MORE</Button>
          </CardContent>
          <div className="relative h-[300px] md:h-[400px]">
            <Image src="/battery-backup.png" alt="Car in garage during power outage" fill className="object-center" />
          </div>
        </div>
      </Card>

      {/* Diagnostics Section */}
      <Card className="overflow-hidden border-green-500/20">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Image src="/opers-Diagnostics.png" alt="Technician servicing garage door opener" width={600} height={400} className="object-center w-full h-[300px] md:h-[400px]" />
          <CardContent className="p-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-green-600">Real-Time Diagnostics</h2>
            <p className="text-muted-foreground">
              Know right away if there is an issue with your garage door and take the hassle out of service repairs by easily connecting with a <span className="text-green-500 font-semibold">trusted dealer</span> through the <span className="text-green-500 font-semibold">myQ app</span>. Conveniently share your <span className="text-green-500 font-semibold">myQ Diagnostics™</span> health report to ensure for a <span className="text-green-500 font-semibold">rapid repair</span>.
            </p>
            <Button className="bg-green-600 hover:bg-green-500 text-white">Learn more about myQ Diagnostics</Button>
          </CardContent>
        </div>
      </Card>
    </main>
  );
}
