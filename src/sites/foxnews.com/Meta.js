import WebMiddle, { PropTypes } from 'webmiddle';
import parentWebmiddle, { settings as parentSettings } from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-service-pipe';
const Parent = parentWebmiddle.service('SearchArticles');

function Meta(props) {
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
            numberOfPages: Math.ceil(count / parentSettings.resultsPerPage),
          },
        };
      }}
    </Pipe>
  );
}

Meta.propTypes = {

};

export default Meta;
