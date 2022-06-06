import axios from "axios";
import ScoreBoard from "../../components/layout/ScoreBoard";
import NewsResults from "../../components/news/NewsResults";

function Basketball(props) {
  return (
    <div>
      <ScoreBoard pageInfo={'basketball'} title={'Basketball News'} description={'Catch up on all the latest news in the NBL, NBA, etc...'} />
      <NewsResults loadedNews={props.loadedNews} />
    </div>
  );
}

// Server side generation:
export const getServerSideProps = async () => {
  // Make API request to NewsAPI
  const response = await axios.get(`https://newsapi.org/v2/everything?q=basketball&apiKey=${process.env.NEWS_API_KEY}`);
  const newsData = response.data.articles;

  // News Data is returned as props
  return {
    props: {
      loadedNews: newsData
    },
  };
};

export default Basketball;