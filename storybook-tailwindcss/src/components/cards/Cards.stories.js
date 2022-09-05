import { Cards } from "./Cards";
import erikaLogo from "../../assets/logo/brands/erika-logo.png"
import frenchFlag from "../../assets/icons/flags/france.png"


export default {
    title: "Lexir/Cards",
    component: Cards,
};

const Template = (args) => <Cards {...args} />;



export const Primary = Template.bind({});
Primary.args = {
    logo: erikaLogo,
    flag: frenchFlag,
    title: "Erika Spirits",
    subTitle: "Vodka & Gin",
    city: "Cognac",
    country: "France"
};