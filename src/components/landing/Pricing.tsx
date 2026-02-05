import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingProps {
  onSubscribe: () => void;
}

export const Pricing = ({ onSubscribe }: PricingProps) => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Prezzi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Gratuito</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">€0</div>
              <ul className="space-y-2 mb-6">
                <li>✓ Funzione base 1</li>
                <li>✓ Funzione base 2</li>
              </ul>
              <Button variant="outline" className="w-full">Inizia</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">€9/mese</div>
              <ul className="space-y-2 mb-6">
                <li>✓ Tutte le funzioni</li>
                <li>✓ Supporto prioritario</li>
                <li>✓ Extra features</li>
              </ul>
              <Button className="w-full" onClick={onSubscribe}>Abbonati</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
