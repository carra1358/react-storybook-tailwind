import { JsxElement } from "typescript";

export const CallToAction = ({ children, image }:CallToActionProps) => {
    return (
        <div className=" bg-secondary lg:flex">
            <div className=" lg:w-1/2">
                {children}    
            </div>
            <div className="lg:w-1/2">
                <img src={image} alt={image.split(".")[0]} className=" w-full h-full"/>
            </div>
        </div>
    );
};
interface CallToActionProps {
    children: React.ReactNode,
    image: string
    
}