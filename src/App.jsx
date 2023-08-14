import {Billing,Business,CardDeal,Clients,Cta ,Footer,Hero,NavBar,Stats,Testimonials }from "./components/index";

import styles from "./style";

function App() {
  
  return (
   <div className="bg-primary w-full overflow-hidden">
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <NavBar/>
    </div>
   </div>
   <div className={`bg-primary ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero/>
    </div>
   </div>
   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Stats/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testimonials/>
      <Clients/>
      <Cta/>
      <Footer/>
    </div>
   </div>
   </div>
  )
}

export default App
