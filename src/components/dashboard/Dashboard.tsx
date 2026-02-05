import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Dashboard = () => {
  const [count, setCount] = useState(0);

  const handleLogout = () => {
    window.location.reload(); // Ricarica la pagina per tornare alla landing
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="grid gap-4">
        <div className="p-6 border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Benvenuto!</h2>
          <p className="text-muted-foreground mb-4">
            Questa è la tua area riservata.
          </p>
          <Button onClick={() => setCount(count + 1)}>
            Hai cliccato {count} volte
          </Button>
        </div>
      </div>
    </div>
  );
};
