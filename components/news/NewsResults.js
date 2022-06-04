import CardLayout from '../ui/CardLayout';
import NewsItem from './NewsItem';

function NewsResults(props) {
  return (
    <CardLayout>
      {props.loadedNews.map((news) => (
        <NewsItem
          key={news.id ? news.id : news.title}
          id={news.id ? news.id : news.title}
          image={news.image}
          urlToImage={news.urlToImage}
          url={news.url}
          title={news.title}
          description={news.description}
          category={news.category}
        />
      ))
      }
    </CardLayout>
  );
}

export default NewsResults;
