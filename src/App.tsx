import { useState } from 'react';

// Componenti Landing
const Navbar = ({ onLogin, onGetStarted }: { onLogin: () => void; onGetStarted: () => void }) => {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="font-bold text-xl">Logo</div>
        <div className="flex gap-4">
          <button onClick={onLogin} className="px-4 py-2 hover:bg-accent rounded">Login</button>
          <button onClick={onGetStarted} className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Benvenuto nel tuo progetto</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">Questa è la tua landing page. Clicca qui sotto per iniziare.</p>
      <button onClick={onGetStarted} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">Inizia Ora</button>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold">1000+</div>
          <div className="text-muted-foreground">Utenti</div>
        </div>
        <div>
          <div className="text-3xl font-bold">99%</div>
          <div className="text-muted-foreground">Soddisfazione</div>
        </div>
        <div>
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-muted-foreground">Supporto</div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onSubscribe }: { onSubscribe: () => void }) => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Prezzi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4">Gratuito</h3>
            <div className="text-3xl font-bold mb-4">€0</div>
            <ul className="space-y-2 mb-6">
              <li>✓ Funzione base 1</li>
              <li>✓ Funzione base 2</li>
            </ul>
            <button className="w-full px-4 py-2 border rounded hover:bg-accent">Inizia</button>
          </div>
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <div className="text-3xl font-bold mb-4">€9/mese</div>
            <ul className="space-y-2 mb-6">
              <li>✓ Tutte le funzioni</li>
              <li>✓ Supporto prioritario</li>
              <li>✓ Extra features</li>
            </ul>
            <button onClick={onSubscribe} className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">Abbonati</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-muted/50">
      <div className="container text-center text-muted-foreground">
        © 2026 Il tuo progetto. Tutti i diritti riservati.
      </div>
    </footer>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [count, setCount] = useState(0);

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 border rounded hover:bg-accent">Logout</button>
      </div>
      <div className="grid gap-4">
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-lg font-semibold mb-4">Benvenuto!</h2>
          <p className="text-muted-foreground mb-4">Questa è la tua area riservata.</p>
          <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
            Hai cliccato {count} volte
          </button>
        </div>
      </div>
    </div>
  );
};

// App Principale
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSubscribe = () => setIsLoggedIn(true);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLogin={handleLogin} onGetStarted={handleSubscribe} />
      <Hero onGetStarted={handleSubscribe} />
      <Stats />
      <Pricing onSubscribe={handleSubscribe} />
      <Footer />
    </div>
  );
}

export default App;
