import WebMiddle, { PropTypes } from 'webmiddle';
import parentWebmiddle from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentWebmiddle.service('SearchArticles');

function SearchArticles({ webmiddle, options, ...rest }) {
  return (
    <Pipe>
      <Parent
        {...rest}
        name="page"
      />

      {({ page }) => ({
        name: 'searchArticles',
        contentType: 'application/json',
        content: page.content.root.articles.map(article => article.article),
      })}
    </Pipe>
  );
}

SearchArticles.propTypes = {
  webmiddle: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default SearchArticles;
