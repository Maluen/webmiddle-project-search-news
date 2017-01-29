import WebMiddle, { PropTypes } from 'webmiddle';
import parentWebmiddle from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentWebmiddle.service('SearchArticles');

function Meta({ nytimesApiKey, webmiddle, options, ...rest }) {
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
            numberOfPages: Math.ceil(count / parentWebmiddle.setting('resultsPerPage')),
          },
        };
      }}
    </Pipe>
  );
}

Meta.propTypes = {
  nytimesApiKey: PropTypes.string.isRequired,
  webmiddle: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default Meta;
