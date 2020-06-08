import { Home } from '../containers';
import { fetchPopularNovels } from '../redux/actions/novel.action';
import getStore from '../store';

export default function HomePage() {
  return <Home />;
}

export async function getServerSideProps() {
  const store = getStore();
  store.dispatch(fetchPopularNovels());

  return {
    props: {},
  };
}
