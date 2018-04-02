import parentNyTimes from 'webmiddle-site-nytimes';
import Meta from './Meta';
import SearchArticles from './SearchArticles';
import ArticleDetails from './ArticleDetails';

export default {
  name: parentNyTimes.name,
  services: {
    Meta,
    SearchArticles,
    ArticleDetails,
  },
};
