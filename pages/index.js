import ScoreBoard from "../components/layout/ScoreBoard";

function Home(props) {
  return (
    <div>
      <ScoreBoard pageInfo={'home'} title={'Latest Headline'} description={'Your source for Australian Sports News...'} />
    </div>
  );
}

export default Home;