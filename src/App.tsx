import { useState } from 'react';

// Componenti Landing
const Navbar = ({ onLogin, onGetStarted }: { onLogin: () => void; onGetStarted: () => void }) => {
  return (
    <nav className="w-full border-b bg-gray-100">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="font-bold text-xl">Logo</div>
        <div className="flex gap-4">
          <button onClick={onLogin} className="px-4 py-2 hover:bg-gray-200 rounded">Login</button>
          <button onClick={onGetStarted} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="py-20 flex flex-col items-center text-center bg-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Benvenuto nel tuo progetto</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">Questa è la tua landing page. Clicca qui sotto per iniziare.</p>
      <button onClick={onGetStarted} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Inizia Ora</button>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold">1000+</div>
          <div className="text-gray-600">Utenti</div>
        </div>
        <div>
          <div className="text-3xl font-bold">99%</div>
          <div className="text-gray-600">Soddisfazione</div>
        </div>
        <div>
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-gray-600">Supporto</div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onSubscribe }: { onSubscribe: () => void }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Prezzi</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Gratuito</h3>
            <div className="text-3xl font-bold mb-4">€0</div>
            <ul className="space-y-2 mb-6">
              <li>✓ Funzione base 1</li>
              <li>✓ Funzione base 2</li>
            </ul>
            <button className="w-full px-4 py-2 border rounded hover:bg-gray-50">Inizia</button>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <div className="text-3xl font-bold mb-4">€9/mese</div>
            <ul className="space-y-2 mb-6">
              <li>✓ Tutte le funzioni</li>
              <li>✓ Supporto prioritario</li>
              <li>✓ Extra features</li>
            </ul>
            <button onClick={onSubscribe} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Abbonati</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-gray-50">
      <div className="container mx-auto text-center text-gray-600">
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 border rounded hover:bg-gray-100">Logout</button>
      </div>
      <div className="grid gap-4">
        <div className="p-6 border rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-4">Benvenuto!</h2>
          <p className="text-gray-600 mb-4">Questa è la tua area riservata.</p>
          <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
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
    <div className="min-h-screen bg-white">
      <Navbar onLogin={handleLogin} onGetStarted={handleSubscribe} />
      <Hero onGetStarted={handleSubscribe} />
      <Stats />
      <Pricing onSubscribe={handleSubscribe} />
      <Footer />
    </div>
  );
}

export default App;

