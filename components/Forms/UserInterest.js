import UserInterestStyles from './UserInterest.module.css';
import Checkbox from '../Checkbox';

const UserInterest = () => (
  <div className={UserInterestStyles.wrapper}>
    <p>What services are you looking for?</p>

    <div className={UserInterestStyles.checkboxContainer}>
      <div>
        <Checkbox interest='buy' />
        <p>Buy a Home</p>
      </div>

      <div>
        <Checkbox interest='sell' />
        <p>Sell a Home</p>
      </div>

      <div>
        <Checkbox interest='invest' />
        <p>Invest</p>
      </div>

      <div>
        <Checkbox interest='rent' />
        <p>Rent</p>
      </div>
    </div>

  </div>
);

export default UserInterest;
