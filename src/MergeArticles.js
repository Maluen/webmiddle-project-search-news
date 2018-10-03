import { PropTypes } from 'webmiddle';
import _ from 'lodash';

function MergeArticles({ articlesBySite }, context) {
  const articlesContent = [];

  _.forEach(articlesBySite.content, (siteArticles, siteName) => {
    const articlesContentToPush = siteArticles.content.map(articleContent => ({
      ...articleContent,
      source: siteName,
    }));
    articlesContent.push(...articlesContentToPush);
  });

  return context.createResource('articles', 'application/json', articlesContent);
}

MergeArticles.propTypes = {
  articlesBySite: PropTypes.object.isRequired, // of resources
};

export default MergeArticles;
