import { LoaderWrapper } from 'components/LoaderElement/LoaderElement.styled';
import Loader from 'react-loader-spinner';
const LoaderElement = () => {
  return (
    <LoaderWrapper>
      <Loader type="TailSpin" color={'#1976d2'} height={46} width={46} />
    </LoaderWrapper>
  );
};

export default LoaderElement;
