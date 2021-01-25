import CardStyles from './Cards.module.css';
import Link from 'next/link';

const CardOne = props => (
  <div className={CardStyles.cardOne}>
    <div className={CardStyles.cardOneTop}>
      <h2>{props.title}</h2>
      <img src={props.iconUrl} alt='buyer, seller, investor icons' />
    </div>
    <div className={CardStyles.cardOneBottom}>
      <p>{props.text1}</p>
      <button>
        <Link href={props.buttonLink} passHref>
          <a>{props.buttonText}</a>
        </Link>
      </button>
    </div>
  </div>
);

export default CardOne;
