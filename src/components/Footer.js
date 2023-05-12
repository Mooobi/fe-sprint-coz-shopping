import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={classes.wrapper}></div>
      <section className={classes.footer}>
        <p>개인정보 처리방침 | 이용 약관</p>
        <p>All rights reserved @ Codestates</p>
      </section>
    </>
  );
};

export default Footer;
