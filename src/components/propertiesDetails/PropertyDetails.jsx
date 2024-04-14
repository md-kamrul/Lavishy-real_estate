import { useParams } from "react-router-dom";

const PropertyDetails = () => {

    const { id } = useParams();
    // const { image, estate_title, id, segment_name, description, price, status, location, facilities } = params;
    // console.log("hellow", estate_title, id, segment_name, description, price, status,);

    return (
        <div className="mt-5">
            <h2>details</h2>
            <h2>{id}</h2>
            {/* <h2>{estate_title}</h2>
            <h2>{segment_name}</h2>
            <h2>{description}</h2>
            <h2>{price}</h2>
            <h2>{status}</h2> */}
        </div>
    );
};

export default PropertyDetails;