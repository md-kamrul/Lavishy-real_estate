import { useParams } from "react-router-dom";

const PropertyDetails = () => {

    const { id } = useParams();

    return (
        <div className="mt-5">
            <h2>{id}</h2>
        </div>
    );
};

export default PropertyDetails;