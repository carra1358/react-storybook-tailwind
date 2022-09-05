import { Header } from "./Header";
import darkLogo from "../../assets/logo/lexir/lexir-logo-dark.png"
import userIcon from "../../assets/icons/socials/sign-in.png"
import cartIcon from "../../assets/icons/socials/cart.png"


export default {
    title: "Lexir/Header",
    component: Header,
    argTypes: {
        logo: {
            description: "Lexir logo: path to asset"
        },
        userIcon: {
            description: "path to asset"
        },
        cartIcon: {
            description: "path to asset"
        },
    }
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: darkLogo,
    userIcon: userIcon,
    cartIcon: cartIcon,
};