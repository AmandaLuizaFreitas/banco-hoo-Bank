import styles from "../../style";
import{discount,robot} from '../../assets/index';
import GetStarted from "../GetStarted/GetStarted";

const Hero = () => 
  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl: px-0 sm:px-16 px-6 `}>
       <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]mb-2">
        <img src={discount} alt="desconto" className="w-[32px] h=[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">20%</span> desconto para {""}
        <span className="text-white">1 Mês</span> Conta
        </p>
        
       </div>
       
       <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins  font-semibold ss:text-[62px] text-[42px] text-white ">O método de   <br className="sm:block hidden ss:leading-[100px] leading-[72px]"/>{""}  
        pagamento da próxima
        <br className="sm:block hidden"/>
        <span className="text-gradient">Geração</span>
     
         </h1>
         <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
         </div>
       </div>
       
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nossa equipe de especialistas utiliza uma metodologia para identificar os cartões de crédito mais propensos a atender às suas necessidades. Nós examinamos as taxas de juros anuais, as taxas anuais</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="cobrança" className="w-[100%] h-[100%] relative z-[5] "  />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"/>
      <div className="absolute z-[0] w-[50%] h-[50%]  right-20  bottom-20 blue__gradient"/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted/>
    </div>
    </section>
  )


export default Hero