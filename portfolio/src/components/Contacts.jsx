import React from 'react';

export const Contacts = () => {
  const phoneNumber = '+91-8787455034';
  const email = 'ddibakar190@gmail.com';

  return (
    <div id="contact" style={styles.container}>
      <h2 style={styles.contactTitle} data-aos="fade-up"
     data-aos-duration="1000">Contact Me</h2>
      <div style={styles.contactDetails}>
        <p style={styles.contactInfo} id="contact-phone"   data-aos="fade-up"
     data-aos-duration="1000"><i class="fa-solid fa-phone-volume fa-2xl"></i> <span style={{color:"black"}}> : {phoneNumber}</span> </p>
        <p style={styles.contactInfo} id="contact-email"  data-aos="fade-up"
     data-aos-duration="1000" ><i class="fa-solid fa-envelope fa-2xl"></i>  <span style={{color:"black"}}> : {email}</span> </p>
      </div>
      <div style={styles.socialMedia}>
        <p style={styles.socialMediaText}  data-aos="fade-up"
     data-aos-duration="1000">Social Media</p>
        <div style={styles.socialMediaLinks}>
        <a style={styles.socialMediaLink}  data-aos="fade-up"
     data-aos-duration="1000" id="contact-linkedin" href="https://www.linkedin.com/in/dibakar-debnath-39865724a/"><i class="fa-brands fa-linkedin  fa-2xl"></i></a>
          <a style={styles.socialMediaLink}  data-aos="fade-up"
     data-aos-duration="1000" id="contact-github" href="https://github.com/Dibakardebnath"><i class="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
      <div> <p style={{fontWeight:"700"}}  
    >Designed <span style={{color:"orangered"}}>  &</span> develop by <span style={{color:"orangered"}}> Dibakar Debnath <span style={{color:"green"}}> ©</span>  </span> 2023</p> </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '10px',
   
  },
  contactTitle: {
    border: '4px solid orangered',
    borderRadius: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    padding:"0px 80px",
    fontFamily: 'Arial, sans-serif',
    color: 'black',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
  },
  contactInfo: {
    fontWeight:"700",
    fontSize: '15px',
    fontFamily: 'Arial, sans-serif',
    color:'orangered',
    margin: '10px 0',
  },
  
  socialMedia: {
  border:"4px solid orangered",
 
    display: 'flex',
   borderRadius:"20px",
    padding:"40px 50px",
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:"40px"
  },
  socialMediaText: {
    border: '2px solid orangered',
    borderRadius: "10px",
    fontSize: '16px',
    fontWeight:"700",
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    padding:"7px 35px",
    margin: '10px 0',
  },
  socialMediaLinks: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
   
  },
  socialMediaLink: {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'orangered',
    textDecoration: 'none',
    margin: '0 10px',
    cursor: 'pointer',
  },
};
