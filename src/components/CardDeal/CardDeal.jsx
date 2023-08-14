import{card} from '../../assets'
import styles,{layout} from '../../style';
import Button from '../Button/Button';

const CardDeal = () => {
  return (
  <section  className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Encontre a melhor oferta <br className='sm:block hidden'/> de cartão em algumas etapas fáceis.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Escolha do cartão ideal é uma decisão crucial para o seu estilo de vida financeiro. É por isso que estamos comprometidos em tornar essa jornada fácil, rápida e recompensadora para você.</p>
    <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt=" cartão" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )
}

export default CardDeal