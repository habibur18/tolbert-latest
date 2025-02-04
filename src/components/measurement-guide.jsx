import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MeasurementGuide() {
  const measurements = [
    { size: '3"', gauge: "0.162", color: "Orange" },
    { size: '4"', gauge: "0.207", color: "Yellow" },
    { size: '4 1/8"', gauge: "0.218", color: "White" },
    { size: '4 1/2"', gauge: "0.225", color: "Red" },
    { size: '4 3/4"', gauge: "0.234", color: "Brown" },
    { size: '4 7/8"', gauge: "0.243", color: "Green" },
    { size: '5"', gauge: "0.250", color: "Gold" },
    { size: '5 1/8"', gauge: "0.263", color: "Blue" },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Wire Size <span className="text-green-500">Measurement Guide</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">Measure 20 coils from end to end to the nearest 1/16 of an inch for accurate spring sizing</p>
        </div>
        <Card className="mx-auto mt-12 max-w-4xl">
          <CardHeader>
            <CardTitle>Spring Measurement Chart</CardTitle>
            <CardDescription>Use this chart to identify your spring size based on measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Measurement</TableHead>
                  <TableHead>Wire Gauge</TableHead>
                  <TableHead>Color Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {measurements.map((m) => (
                  <TableRow key={m.size}>
                    <TableCell>{m.size}</TableCell>
                    <TableCell>{m.gauge}</TableCell>
                    <TableCell>{m.color}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
