import GrayStar from '../../icon/bookmark - off.png';
import YellowStar from '../../icon/bookmark - on.png';
import Star from '../../icon/bookmark.png';
import X from '../../icon/closeButton.png';
import List from '../../icon/hamburger.png';
import GiftBox from '../../icon/product.png';

export const iconNames = [GrayStar, YellowStar, Star, X, List, GiftBox];

export const Icon = ({ icon, size, ...rest }) => {
  return (
    <img
      src={icon}
      style={{ width: `${size}px`, height: `${size}px` }}
      alt={icon}
      {...rest}
    />
  );
};
