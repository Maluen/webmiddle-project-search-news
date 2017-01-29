import WebMiddle, { PropTypes } from 'webmiddle';
import parentWebmiddle from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentWebmiddle.service('SearchArticles');

function Meta({ webmiddle, options, ...rest }) {
  return (
    <Pipe>
      <Parent
        {...rest}
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
            numberOfPages: Math.ceil(count / parentWebmiddle.setting('resultsPerPage')),
          },
        };
      }}
    </Pipe>
  );
}

Meta.propTypes = {
  webmiddle: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default Meta;
