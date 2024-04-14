const dataCard = ({ singleData }) => {

    const { estate_title, image } = singleData;

    return (
        <div>
            <div className="card border border-[#00c867]">
                <figure><img src={ image} alt="resorts" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dataCard;