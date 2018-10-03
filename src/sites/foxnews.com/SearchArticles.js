import { PropTypes } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-component-pipe';
const Parent = parentFoxNews.components.SearchArticles;

function SearchArticles(props, context) {
  return (
    <Pipe>
      <Parent
        {...props}
        name="page"
      />

      {({ page }) => context.createResource(
        'searchArticles',
        'application/json',
        page.content.root.articles.map(article => article.article),
      )}
    </Pipe>
  );
}

SearchArticles.propTypes = {

};

export default SearchArticles;
