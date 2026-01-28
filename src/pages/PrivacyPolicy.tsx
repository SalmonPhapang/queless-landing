import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-dark">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. Introduction</h2>
        <p className="mb-4">
          Queless ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
          or use our mobile application, in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when you create an account, place an order, 
          or communicate with us. This may include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Name and surname</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Delivery address</li>
          <li>Payment information (processed securely by our third-party payment providers)</li>
          <li>Age verification documents (required for alcohol purchases under the Liquor Act)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use your personal information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and deliver our services, including processing orders and payments.</li>
          <li>To verify your age for alcohol purchases as required by South African law.</li>
          <li>To communicate with you about your orders, account, and promotional offers.</li>
          <li>To improve our app and customer service.</li>
          <li>To comply with legal obligations, such as POPIA and FICA requirements where applicable.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Sharing of Information</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>**Service Providers:** Delivery partners, payment processors, and data analytics providers who assist us in our operations.</li>
          <li>**Legal Requirements:** If required by law or in response to valid requests by public authorities (e.g., a court or the Information Regulator).</li>
          <li>**Business Transfers:** In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. 
          However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">6. Your Rights</h2>
        <p className="mb-4">
          Under POPIA, you have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Access personal information we hold about you.</li>
          <li>Request the correction or deletion of your personal information.</li>
          <li>Object to the processing of your personal information.</li>
          <li>Lodge a complaint with the Information Regulator.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact our Information Officer at:
        </p>
        <p className="mb-4 font-semibold">
          Email: privacy@queless.co.za<br />
          Address: [Your Physical Address, South Africa]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
