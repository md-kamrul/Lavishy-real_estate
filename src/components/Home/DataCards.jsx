import { useLoaderData } from "react-router-dom";
import DataCard from "./DataCard"
import 'animate.css';

const dataCards = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="w-[80%] mx-auto">
            <h2 className='text-center text-[#2b3440] mt-24 font-bold text-4xl mb-5 animate__backInDown' >Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(singleData =>
                        <DataCard singleData={singleData} key={singleData.id}></DataCard>
                    )
                }
            </div>
        </div>
    );
};

export default dataCards;