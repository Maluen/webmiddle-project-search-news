import { PropTypes } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentFoxNews.services.SearchArticles;

function Meta(props, context) {
  const {
    resultsPerPage = parentFoxNews.settings.resultsPerPage,
  } = context.options;

  return (
    <Pipe>
      <Parent
        {...props}
        name="firstPage"
        pageNumber={0}
      />

      {({ firstPage }) => {
        const count = firstPage.content.root.count;
        return {
          name: 'meta',
          contentType: 'application/json',
          content: {
            count,
            numberOfPages: Math.ceil(count / resultsPerPage),
          },
        };
      }}
    </Pipe>
  );
}

Meta.propTypes = {

};

export default Meta;
