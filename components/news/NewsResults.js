import CardLayout from '../ui/CardLayout';
import NewsItem from './NewsItem';

function NewsResults(props) {
  return (
    <CardLayout>
      {props.loadedNews.map((news) => (
        <NewsItem
          key={news.title}
          id={news.title}
          imageUrl={news.urlToImage}
          articleLink={news.url}
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
