import type { Meta, StoryObj } from "@storybook/vue3";
import HelloWorld from "@/components/HelloWorld.vue";
const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Primary: Story = {
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<HelloWorld v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};
