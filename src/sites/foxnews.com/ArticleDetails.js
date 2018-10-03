import { PropTypes } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-component-pipe';
import { getFormattedDate } from '../../utils';
const Parent = parentFoxNews.components.ArticleDetails;

function fixArticle(article) {
  return {
    ...article,
    date: getFormattedDate(new Date(article.date)),
  };
}

function ArticleDetails(props, context) {
  return (
    <Pipe>
      <Parent
        {...props}
        name="page"
      />

      {({ page }) => context.createResource(
        'articleDetails',
        'application/json',
        fixArticle(page.content.root.article),
      )}
    </Pipe>
  );
}

ArticleDetails.propTypes = {

};

export default ArticleDetails;
