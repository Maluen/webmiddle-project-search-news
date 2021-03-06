import { PropTypes } from 'webmiddle';
import parentNyTimes from 'webmiddle-site-nytimes';
import Pipe from 'webmiddle-component-pipe';
import JSONSelectToJson, { helpers } from 'webmiddle-component-jsonselect-to-json';
import { getFormattedDate } from '../../utils';
const Parent = parentNyTimes.components.SearchArticles;

const { elGet, elMap, elPipe } = helpers;

function SearchArticles({ nytimesApiKey, ...rest }, context) {
  return (
    <Pipe>
      <Parent
        {...rest}
        name="page"
        apiKey={nytimesApiKey}
      />

      {({ page }) =>
        <JSONSelectToJson
          name="searchArticles"
          from={page}
        >
          <articles el=".docs > *">
            {elMap(el =>
              <article el={el}>
                <url el=".web_url">{elGet()}</url>
                <title el=".headline > .main">{elGet()}</title>
                <description el=".snippet">{elGet()}</description>
                <date el=".pub_date">
                  {elPipe([
                    elGet(),
                    dateString => getFormattedDate(new Date(dateString)),
                  ])}
                </date>
                <image
                  el=".multimedia > *"
                  condition={currEl => currEl.subtype === 'thumbnail'}
                >
                  {elPipe([
                    elGet('.url'),
                    relativeUrl => relativeUrl ? `http://www.nytimes.com/${relativeUrl}` : null,
                  ])}
                </image>
              </article>
            )}
          </articles>
        </JSONSelectToJson>
      }

      {({ searchArticles }) => context.createResource(
        'searchArticles',
        'application/json',
        searchArticles.content.root.articles.map(article => article.article),
      )}
    </Pipe>
  );
}

SearchArticles.propTypes = {
  nytimesApiKey: PropTypes.string.isRequired,
};

export default SearchArticles;
