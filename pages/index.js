import axios from "axios";
import ScoreBoard from "../components/layout/ScoreBoard";
import NewsResults from "../components/news/NewsResults";


// Server side generation:
export const getServerSideProps = async () => {
  // Make API request to NewsAPI
  const response = await axios.get(`https://newsapi.org/v2/everything?q=sport&apiKey=${process.env.NEWS_API_KEY}`);

  const newsData = response.data.articles;

  // News Data is returned as props
  return {
    props: {
      loadedNews: newsData
    },
  };
};


function Home(props) {

  return (
    <div>
      <ScoreBoard pageInfo={'home'} title={'Latest Sports News'} description={'The best source for sports news, all in one place!'} />
      <NewsResults loadedNews={props.loadedNews} />
    </div>
  );
}
export default Home;