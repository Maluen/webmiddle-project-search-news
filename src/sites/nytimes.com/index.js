import WebMiddle from 'webmiddle';
import parentWebmiddle from 'webmiddle-site-nytimes';
import Meta from './Meta';
import SearchArticles from './SearchArticles';
import ArticleDetails from './ArticleDetails';

export default new WebMiddle({
  name: 'nytimes.com',
  parent: parentWebmiddle,
  services: {
    Meta,
    SearchArticles,
    ArticleDetails,
  },
});
