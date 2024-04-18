const FaqSection = () => {
    return (
        <div className="w-[80%] mx-auto">
            <h2 className='text-center text-[#2b3440] mt-24 font-bold text-4xl mb-5' >FAQ</h2>
            <div className="collapse collapse-plus bg-[#2b3440] mb-3">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-semibold text-white">
                    What type of properties does Lavishy offer?
                </div>
                <div className="collapse-content">
                    <p className="text-white">
                        Lavishy specializes in luxury real estate, catering to those seeking the finest penthouses, beachfront estates, private islands, exquisite villas, and grand mansions.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-[#2b3440] mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold text-white">
                    How can I be sure I am finding properties within my budget?
                </div>
                <div className="collapse-content">
                    <p className="text-white">
                        Lavishy understands that luxury real estate encompasses a wide range of budgets.  We recommend browsing our website and using the search filters to find properties that match your desired price range. Additionally, feel free to contact one of our experienced real estate agents who can help you find the perfect property that aligns with your financial goals.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-[#2b3440]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold text-white">
                    Does Lavishy offer properties for rent or sale?
                </div>
                <div className="collapse-content">
                    <p className="text-white">
                        Lavishy offers a comprehensive selection of luxury properties for both sale and rent.  Whether you are seeking a permanent residence or a luxurious vacation getaway, we have something to suit your needs.  Our listings clearly indicate the status (sale or rent) of each property.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;