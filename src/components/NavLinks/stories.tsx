import { NavLinkProps, NavLinks } from '.';
import links from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
} as Meta;

export const Template: Story<NavLinkProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
