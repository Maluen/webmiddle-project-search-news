import { PropTypes, pickDefaults } from 'webmiddle';
import parentNyTimes from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentNyTimes.services.SearchArticles;

function Meta({ nytimesApiKey, ...rest }, context) {
  return (
    <Pipe>
      <Parent
        {...rest}
        name="firstPage"
        pageNumber={0}
        apiKey={nytimesApiKey}
      />

      {({ firstPage }) => {
        const count = firstPage.content.root.response.meta.hits;
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
      resultsPerPage: parentNyTimes.settings.resultsPerPage
    },
    context.options
  );

Meta.propTypes = {
  nytimesApiKey: PropTypes.string.isRequired,
};

export default Meta;
