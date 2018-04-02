import WebMiddle, { PropTypes } from 'webmiddle';
import parentNyTimes from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-service-pipe';
import { getFormattedDate } from '../../utils';
const Parent = parentNyTimes.services.ArticleDetails;

function fixArticle(article) {
  return {
    ...article,
    date: getFormattedDate(new Date(article.date)),
  };
}

function ArticleDetails(props) {
  return (
    <Pipe>
      <Parent
        {...props}
        name="page"
      />

      {({ page }) => ({
        name: 'articleDetails',
        contentType: 'application/json',
        content: fixArticle(page.content.root.article),
      })}
    </Pipe>
  );
}

ArticleDetails.propTypes = {

};

export default ArticleDetails;
