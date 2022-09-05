import { Button } from "./Button";

export default {
    title: "Lexir/Button",
    component: Button,
    argTypes: {
        label: {
            description: "button text content"
        },
        handleClick: {
            description: "event triggered on click",
            action: handleClick
        },
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "click",
    handleClick: () => console.log(click)
};