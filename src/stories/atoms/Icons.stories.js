import { Icon } from './Icon';
import { iconNames } from './Icon';

export default {
  title: 'Atoms/Icons',
  component: Icon,
  parameters: {
    backgrounds: { default: { value: 'light' } },
    controls: { hideNoControlsWarning: true },
  },
};

export const All = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '3rem 3rem 3rem 3rem',
      gridAutoRows: '3rem',
    }}
  >
    {iconNames.map((icon) => (
      <Icon icon={icon} key={icon} size="16px" />
    ))}
  </div>
);

export const Item = (args) => <Icon {...args} />;
Item.argTypes = {
  icon: {
    options: iconNames,
    control: { type: 'select' },
  },
  size: {
    options: [16, 24, 48],
    control: { type: 'radio' },
  },
};
Item.args = {
  icon: null,
  size: 24,
};
