import { CallToAction } from "./CallToAction";
import { Button } from "../Button";
import wineCellerPic from "../../assets/img/wine-celler.png"

export default {
    title: "Lexir/CallToAction",
    component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;



export const Primary = Template.bind({});
Primary.args = {
    children: <>
        <div className=" pl-9 pr-4 py-16 ">
            <h2 className=" text-5xl text-primary font-bold font-mainFont mb-6" >
                Have a brand you’d like to see on <span className=" text-sucess">Lexir</span>?
            </h2>
            <p className=" text-paragrah text-fontXS font-secondaryFont font-normal mb-7">
                Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you'd like to see on Lexir, let us know.
            </p>
            <Button label="Suggest a Brand" handleClick={() => console.log("click")} />
        </div>
    </>,
    image: wineCellerPic
};