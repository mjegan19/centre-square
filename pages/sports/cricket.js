import axios from "axios";
import ScoreBoard from "../../components/layout/ScoreBoard";
import NewsResults from "../../components/news/NewsResults";

function Cricket(props) {
  return (
    <div>
      <ScoreBoard pageInfo={'cricket'} title={'Cricket News'} description={'Catch up on the latest cricket news...'} />
      <NewsResults loadedNews={props.loadedNews} />
    </div>
  );
}

// Server side generation:
export const getServerSideProps = async context => {
  // Make API request to NewsAPI
  const response = await axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=${process.env.NEWS_API_KEY}`);
  const newsData = response.data.articles;

  // News Data is returned as props
  return {
    props: {
      loadedNews: newsData
    },
  };
};

export default Cricket;