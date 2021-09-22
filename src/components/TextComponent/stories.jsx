import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fuga dolorum vel, maiores sint ipsa quos accusantium ex voluptate
    quibusdam quo beatae similique, consectetur neque fugiat, facere
    voluptatibus nostrum ab obcaecati?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
