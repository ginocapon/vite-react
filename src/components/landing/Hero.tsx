import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Benvenuto nel tuo progetto
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        Questa è la tua landing page. Clicca qui sotto per iniziare.
      </p>
      <Button size="lg" onClick={onGetStarted}>Inizia Ora</Button>
    </section>
  );
};
