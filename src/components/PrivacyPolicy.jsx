
const PrivacyPolicy = () => {
    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold">Your Privacy, Our Priority</h2>
            <p className="mt-5">At BrandShop, your privacy and the security of your personal information are of utmost importance to us. We are committed to ensuring that your data is handled with the highest level of care and protection. This Privacy and Security section outlines our practices and commitment to safeguarding your information.</p>


            <div className="space-y-5">
                <div className="collapse collapse-plus bg-base-200 mt-10">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Your Information, Your Trust
                    </div>
                    <div className="collapse-content">
                        <p>We understand that when you interact with our website, you trust us with your information. We want to make sure you are comfortable with how we collect, use, and protect your data. Rest assured, we take this responsibility seriously.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What Information We Collect
                    </div>
                    <div className="collapse-content">
                        <p>When you browse our website, we may collect certain information, such as your IP address, browser type, and cookies. If you choose to create an account, contact us, or make a purchase, we may collect additional information, including your name, contact details, and preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How We Use Your Information
                    </div>
                    <div className="collapse-content">
                        <p>We use the information we collect to enhance your experience with BrandShop. This may include personalizing your browsing experience, providing you with relevant product recommendations, and improving our website's functionality. Your data helps us understand your needs and preferences, allowing us to serve you better.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;