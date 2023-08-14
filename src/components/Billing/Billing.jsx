
import{apple,bill,google} from '../../assets';
import styles,{layout} from '../../style';

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
     <div className={layout.sectionImgReverse}>
      <img src={bill} alt="Cobrança" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient'/>
     </div>
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Controle facilmente sua <br className='sm:block hidden'/> cobrança & faturamento.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Apresentamos a solução definitiva para o seu controle financeiro: nosso sistema avançado de gerenciamento de cobrança e faturamento. Com uma interface intuitiva e recursos poderosos, você estará no controle total das suas finanças empresariais</p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple store"   className='w-[128px] h-[42px] object-contain cursor-pointer mr-5'/>
        <img src={google} alt="google play"   className='w-[128px] h-[42px] object-contain cursor-pointer '/>

      </div>
     </div>
    </section>
  )
}

export default Billing