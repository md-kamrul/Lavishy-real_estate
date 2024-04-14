import { AiFillDollarCircle } from "react-icons/ai";
import { GrStatusInfo } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

const dataCard = ({ singleData }) => {

    const { estate_title, image, description, price, status, location } = singleData;

    return (
        <div>
            <div className="card border border-[#2b3440]">
                <figure><img src={image} alt="resorts" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    {
                        description.length > 100 ?
                            <p>{description.slice(0, 100)}....</p>
                            :
                            <p>{description}</p>
                    }
                    <div className="my-5 flex gap-3">
                        <div className="font-medium flex gap-1">
                            <AiFillDollarCircle className="text-2xl text-[#00c867]" />{price}
                        </div>
                        <div className="font-medium flex gap-1">
                            <GrStatusInfo className="text-2xl text-[#00c867]" />{status}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaLocationDot className="text-2xl text-[#00c867]" />{location}
                    </div>
                    <div className="text-center underline font-bold mt-3 cursor-pointer">
                        View Details
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dataCard;