const dataCard = ({ singleData }) => {

    const { estate_title, image, segment_name, description, price, status, area, location, facilities } = singleData;

    return (
        <div>
            <div className="card border border-[#00c867]">
                <figure><img src={image} alt="resorts" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p>{segment_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dataCard;