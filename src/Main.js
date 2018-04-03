import webmiddle, { PropTypes } from 'webmiddle';
import Pipe from 'webmiddle-service-pipe';
import Parallel from 'webmiddle-service-parallel';
import MergeArticles from './MergeArticles';
import SiteMain from './SiteMain';
import sites from './sites';

function Main(props) {
  const { sites: siteNames } = props;
  return (
    <Pipe>
      <Parallel name="articlesBySite">
        {siteNames.map(siteName => {
          const site = sites[siteName];
          return (
            <SiteMain {...props} site={site} name={siteName} />
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
