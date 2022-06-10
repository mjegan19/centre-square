// Import Core Module
import axios from "axios";

// Import Components
import ScoreBoard from "../../components/layout/ScoreBoard";
import NewsResults from '../../components/news/NewsResults';

function Footy(props) {
  return (
    <div>
      <ScoreBoard pageInfo={'afl'} title={'Australian Rules News'} description={'Catch up on the latest in the AFL...'} />
      <NewsResults loadedNews={props.loadedNews} />
    </div>
  );
}

// Server side generation:
export const getServerSideProps = async () => {
  // Make API request to NewsAPI
  const response = await axios.get(`https://newsapi.org/v2/everything?q=sport%20AND%20(afl)&apiKey=${process.env.NEWS_API_KEY}`);
  const newsData = response.data.articles;

  // News Data is returned as props
  return {
    props: {
      loadedNews: newsData
    },
  };
};

export default Footy;