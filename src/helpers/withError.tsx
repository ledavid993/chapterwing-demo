import { Error } from '../components';

const withErrors = (statusCode: number, Wrapper: React.FC) => {
  const NewWrapper = () => {
    if (statusCode > 400) return <Error statusCode={statusCode} />;
    return <Wrapper />;
  };

  return NewWrapper;
};

export default withErrors;
