import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";
import Footer from "./../footer/Footer"

const PropertyDetails = () => {

    const { id } = useParams();
    const properties = useLoaderData();
    const property = properties.find(property => property.id == id);
    console.log("id from params ", id, "id needed ", property);

    return (
        <div>
            <div className="w-[80%] mx-auto mt-20">
                <div className="flex flex-col md:flex-row justify-between mb-20">
                    <div>
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl font-bold">
                                {property.estate_title}
                            </span>
                            <span className="text-lg text-white bg-[#00c867] px-3 rounded-3xl font-semibold">
                                {property.status}
                            </span>
                        </div>
                        <h3 className="text-xl flex gap-1">
                            <FaLocationDot className="text-2xl text-[#00c867]" />
                            {property.location}
                        </h3>
                    </div>
                    <div className="text-2xl flex gap-1 text-[#00c867] font-bold mt-2 md:mt-0">

                        <AiFillDollarCircle className="text-[28px]" />
                        <h2>
                            {property.price}
                        </h2>
                    </div>
                </div>
                <div className="mb-20">
                    <img className="rounded-xl" src={property.image} alt="image" />
                </div>
                <div className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20">
                    <span className="text-2xl font-bold border-b-4 border-b-[#00c867]">
                        Description
                    </span>
                    <h2 className="mt-5 ">
                        {property.description}
                    </h2>
                </div>

                <div className="text-[#2b3440] border-2 p-7 rounded-lg shadow-md mb-20">
                    <span className="text-2xl font-bold border-b-4 border-b-[#00c867]">
                        Property Details
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
                        <div className="text-lg flex gap-1 mt-4">
                            <h2>Property ID: </h2>
                            <h2>1052IF00{property.id}</h2>
                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2>Segment: </h2>
                            <h2>{property.segment_name}</h2>
                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2>Status: </h2>
                            <h2>For {property.status}</h2>
                        </div>
                        <div className="text-lg flex gap-1 mt-4">
                            <h2>Area: </h2>
                            <h2>{property.area} sq ft</h2>
                        </div>
                    </div>
                    <div className="text-lg flex gap-1 mt-4">
                        <div>Facilities: </div>
                        <br />
                        <div>
                            {
                                property.facilities.map(
                                    facility => <div className="flex gap-1 items-center">
                                        <FaCheckSquare className="text-[#00c867]" />
                                        {facility}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PropertyDetails;