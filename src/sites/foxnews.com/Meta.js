import WebMiddle, { PropTypes, pickDefaults } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentFoxNews.services.SearchArticles;

function Meta(props, context) {
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
            numberOfPages: Math.ceil(count / context.options.resultsPerPage),
          },
        };
      }}
    </Pipe>
  );
}

Meta.options = (props, context) =>
  pickDefaults(
    {
      resultsPerPage: parentFoxNews.settings.resultsPerPage
    },
    context.options
  );

Meta.propTypes = {

};

export default Meta;
