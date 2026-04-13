import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden flex flex-col justify-center items-center">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}
      >
        <Navbar />
      </div>
      <div className={`${styles.flexStart} ${styles.boxWidth}`}>
        <Hero />
      </div>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth} flex-col`}
      >
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
