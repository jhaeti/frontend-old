import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
    title: "My/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    label: "Button",
};
export const Primary2 = Template.bind({});
Primary2.args = {
    variant: "secondary",
    label: "Button",
};
