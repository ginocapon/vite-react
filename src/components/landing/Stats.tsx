export const Stats = () => {
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
