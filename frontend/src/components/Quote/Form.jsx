
import Lottie from 'lottie-web';

import quote from '../../assets/quote.json';

const Animate = () => {
  return (
    <div>
      <Lottie animationData={quote} />
    </div>
  );
};

export default Animate;
