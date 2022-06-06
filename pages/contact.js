import ScoreBoard from "../components/layout/ScoreBoard";

function ContactUs() {
  return (
    <div>
      <ScoreBoard pageInfo={'contact'} title={'Contact Us'} description={'Reach out to us via our channels below'} />

      <h2>Contact CentreSquare</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia at natus id quibusdam optio illo error magnam ullam, voluptatem necessitatibus libero amet quos similique!</p>

      <h3>Mail</h3>
      <p className="strong">
        CENTREsquare<br />
        782 Elizabeth St<br />
        East Melbourne VIC 3001<br />
      </p>

      <h3>Email</h3>
      <p><strong>enquiries@centresquare.com.au</strong></p>

      <h3>Phone</h3>
      <p><strong>(01) 4392-9340</strong></p>
    </div>
  );
}

export default ContactUs;