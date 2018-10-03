import { PropTypes, ErrorBoundary } from 'webmiddle';
import Pipe from 'webmiddle-component-pipe';
import ArrayMap from 'webmiddle-component-arraymap';
import Filter from './Filter';
import Merge from './Merge';

const createEmptyArticleDetails = context => () =>
  context.createResource('articleDetails', 'application/json', {});

function ProcessPage({
  site, query, startYear, endYear, pageNumber, filters, ...rest
}, context) {
  const { SearchArticles, ArticleDetails } = site.components;

  return (
    <Pipe>
      <SearchArticles
        {...rest}
        name="articles"
        query={query}
        startYear={startYear}
        endYear={endYear}
        pageNumber={pageNumber}
      />

      {({ articles }) =>
        <Filter
          name="filteredArticles"
          articles={articles}
          filters={filters}
        />
      }

      {({ filteredArticles }) =>
        <ArrayMap
          name="mergedArticleResources"
          array={filteredArticles.content}
          limit={1}
          callback={articleContent => (
            <Pipe>
              <ErrorBoundary handleCatch={createEmptyArticleDetails(context)}>
                <ArticleDetails
                  {...rest}
                  name="articleDetails"
                  url={articleContent.url}
                />
              </ErrorBoundary>

              {() => context.createResource('article', 'application/json', articleContent)}

              {({ article, articleDetails }) =>
                <Merge
                  name="mergedArticle"
                  sources={[article, articleDetails]}
                />
              }
            </Pipe>
          )}
        />
      }

      {/* Flatten the resource of resources */}
      {({ mergedArticleResources }) => context.createResource(
        'mergedArticles',
        'application/json',
        mergedArticleResources.content.map(r => r.content),
      )}

      {({ mergedArticles }) =>
        <Filter
          name="finalArticles"
          articles={mergedArticles}
          filters={filters}
        />
      }
    </Pipe>
  );
}

ProcessPage.propTypes = {
  site: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  pageNumber: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};

export default ProcessPage;
