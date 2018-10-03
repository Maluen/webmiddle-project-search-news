import { PropTypes } from 'webmiddle';
import parentNyTimes from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-component-pipe';
import { getFormattedDate } from '../../utils';
const Parent = parentNyTimes.components.ArticleDetails;

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
