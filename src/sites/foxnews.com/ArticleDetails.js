import WebMiddle, { PropTypes } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
import { getFormattedDate } from '../../utils';
const Parent = parentFoxNews.services.ArticleDetails;

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
