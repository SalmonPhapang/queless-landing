import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-dark">Terms and Conditions</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Queless. These Terms and Conditions govern your use of our website and mobile application. 
          By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, 
          you may not access the service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. Alcohol Sales and Age Restriction</h2>
        <p className="mb-4">
          <strong>Strictly 18+ Only:</strong> Queless facilitates the sale and delivery of alcohol. By using our service to order alcohol, 
          you confirm that you are at least 18 years of age.
        </p>
        <p className="mb-4">
          <strong>Verification:</strong> Our delivery partners are required to verify the age of the recipient upon delivery. 
          Valid identification (ID book, driver's license, or passport) will be requested. If the recipient cannot provide valid ID 
          proving they are 18 or older, the delivery will be refused and a cancellation fee may apply.
        </p>
        <p className="mb-4">
          <strong>Responsible Drinking:</strong> We support responsible drinking. We reserve the right to refuse delivery to anyone who appears intoxicated.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. Orders and Deliveries</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>**Availability:** All orders are subject to product availability and acceptance by our partner vendors.</li>
          <li>**Delivery Areas:** We currently deliver to specific areas within South Africa. You will be notified if your address is outside our delivery zone.</li>
          <li>**Delivery Times:** Delivery times are estimates and cannot be guaranteed. Factors such as traffic, weather, and high demand may cause delays.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Payments and Refunds</h2>
        <p className="mb-4">
          All prices are in South African Rand (ZAR) and include VAT. Payment is required at the time of order. 
          Refunds are processed in accordance with the Consumer Protection Act (CPA) and our Return Policy.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">5. User Accounts</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility 
          for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">6. Limitation of Liability</h2>
        <p className="mb-4">
          To the maximum extent permitted by South African law, Queless shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
          resulting from your use of the service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">7. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">8. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding these Terms, please contact us at:
        </p>
        <p className="mb-4 font-semibold">
          Email: support@queless.co.za
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
