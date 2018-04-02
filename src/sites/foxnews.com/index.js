import parentFoxNews from 'webmiddle-site-foxnews';
import Meta from './Meta';
import SearchArticles from './SearchArticles';
import ArticleDetails from './ArticleDetails';

export default {
  name: parentFoxNews.name,
  services: {
    Meta,
    SearchArticles,
    ArticleDetails,
  },
};
