// Import Core Module
import axios from "axios";

// Import Components
import ScoreBoard from "../../components/layout/ScoreBoard";
import NewsResults from '../../components/news/NewsResults';

function Racing(props) {
  return (
    <div>
      <ScoreBoard pageInfo={'motorsport'} title={'Motorsport News'} description={'Find out what news is getting traction on and off the track.'} />
      <NewsResults loadedNews={props.loadedNews} />
    </div>
  );
}

// Server side generation:
export const getServerSideProps = async () => {
  // Make API request to NewsAPI
  const response = await axios.get(`https://newsapi.org/v2/everything?q=car+racing&apiKey=${process.env.NEWS_API_KEY}`);
  const newsData = response.data.articles;

  // News Data is returned as props
  return {
    props: {
      loadedNews: newsData
    },
  };
};

export default Racing;