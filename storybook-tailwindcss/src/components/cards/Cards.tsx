export const Cards = ({ logo, title , subTitle , city,country, flag}: CardsProps) => {
    return (
        <div className=" w-80 h-28 flex p-2 font-secondaryFont text-cardTextContent border border-cardsBorder rounded-radiusS hover:bg-secondary">
           <div className=" w-1/4 flex items-center ml-1">
                <img src={logo} alt="" className="object-contain"/>
            </div>
           <div className=" w-2/3 h-full border-l-cardsSeparator border-l-2 ml-5 pl-5">
            <h3 className=" font-bold text-fontS capitalize text-primary">{title}</h3>
            <p className=" text-fontXS ">{subTitle}</p>
            <figure className="flex items-center">
                <img src={flag} alt=""  className=" mr-3"/>
                <figcaption>{city}, {country}</figcaption>
            </figure>
          </div> 
        </div>
    );
};
interface CardsProps {
    logo: string,
    flag:string ,
    title: string,
    subTitle: string,
    city: string ,
    country: string

    
}