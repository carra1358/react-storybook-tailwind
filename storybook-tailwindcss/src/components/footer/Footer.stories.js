import { Footer } from "./Footer";
import lexirLogoLight from "../../assets/logo/lexir/lexir-logo-light.png"


export default {
    title: "Lexir/Footer",
    component: Footer,
    argTypes: {
        logo: {
            description: "Lexir logo: path to asset"
        },
    }
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: lexirLogoLight
}
