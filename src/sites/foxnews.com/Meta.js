import { PropTypes } from 'webmiddle';
import parentFoxNews from 'webmiddle-site-foxnews';
import Pipe from 'webmiddle-component-pipe';
const Parent = parentFoxNews.components.SearchArticles;

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
        return context.createResource('meta', 'application/json', {
          count,
          numberOfPages: Math.ceil(count / resultsPerPage),
        });
      }}
    </Pipe>
  );
}

Meta.propTypes = {

};

export default Meta;
