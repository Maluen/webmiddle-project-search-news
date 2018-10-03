import { PropTypes } from 'webmiddle';
import parentNyTimes from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-component-pipe';
const Parent = parentNyTimes.components.SearchArticles;

function Meta({ nytimesApiKey, ...rest }, context) {
  const {
    resultsPerPage = parentNyTimes.settings.resultsPerPage,
  } = context.options;

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
        return context.createResource('meta', 'application/json', {
          count,
          numberOfPages: Math.ceil(count / resultsPerPage),
        });
      }}
    </Pipe>
  );
}

Meta.propTypes = {
  nytimesApiKey: PropTypes.string.isRequired,
};

export default Meta;
