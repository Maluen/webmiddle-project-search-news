import WebMiddle, { PropTypes } from 'webmiddle';
import parentWebmiddle, { settings as parentSettings } from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentWebmiddle.service('SearchArticles');

function Meta({ nytimesApiKey, ...rest }) {
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
            numberOfPages: Math.ceil(count / parentSettings.resultsPerPage),
          },
        };
      }}
    </Pipe>
  );
}

Meta.propTypes = {
  nytimesApiKey: PropTypes.string.isRequired,
};

export default Meta;
