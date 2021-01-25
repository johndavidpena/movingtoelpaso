import FooterStyles from './Footer.module.css';

const Footer = () => (
  <div className={FooterStyles.footer}>
    <div className={FooterStyles.top}>
      <div>
        <p>John David Peña</p>
        <p>Agent with eXp Realty</p>
        <p>Agent License Number: #733512</p>
      </div>

      <div>
        <p>Broker Office: (915) 242-2100</p>
        <p>Broker Address: 221 N. Kansas St., Suite 700</p>
        <p>Broker License Number: #501852</p>
      </div>
    </div>

    <div className={FooterStyles.middle}>
      <img src='https://res.cloudinary.com/mimas-music/image/upload/v1605112247/EXP_White.png' alt='EXP-Realty-logo' alt='EXP-Realty-logo' />
    </div>

    <div className={FooterStyles.bottom}>
      <a target='_blank' href='https://drive.google.com/file/d/1dnGCj8szdMqM0RDDAalvKZ-QIbI4QSYa/view?usp=sharing'>Consumer Protection Notice</a>
      <br />
      <a target='_blank' href='https://drive.google.com/file/d/1zSlxg8JSjHTp1BpzgFxXeEFhOEOch3XT/view?usp=sharing'>Information About Brokerage Services</a>
    </div>
  </div>
);

export default Footer;
