import WebMiddle, { PropTypes } from 'webmiddle';
import Pipe from 'webmiddle-service-pipe';
import Parallel from 'webmiddle-service-parallel';
import MergeArticles from './MergeArticles';
import SiteMain from './SiteMain';
import siteWebMiddles from './sites';

function Main(props) {
  const { sites } = props;
  return (
    <Pipe>
      <Parallel name="articlesBySite">
        {sites.map(siteName => {
          const siteWebMiddle = siteWebMiddles[siteName];
          return (
            <SiteMain {...props} site={siteWebMiddle} name={siteName} />
          );
        })}
      </Parallel>

      {({ articlesBySite }) =>
        <MergeArticles name="articles" articlesBySite={articlesBySite} />
      }
    </Pipe>
  );
}

Main.propTypes = {
  nytimesApiKey: PropTypes.string,
  sites: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
};

export default Main;
