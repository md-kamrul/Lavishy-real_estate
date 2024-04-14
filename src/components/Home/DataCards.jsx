import { useLoaderData } from "react-router-dom";
import DataCard from "./DataCard"

const dataCards = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h2 className='text-center text-[#2b3440] mt-24 font-bold text-4xl mb-5' >Properties</h2>
            {
                data.map(singleData =>
                    <DataCard singleData={singleData} key={singleData.id}></DataCard>
                )
            }
        </div>
    );
};

export default dataCards;