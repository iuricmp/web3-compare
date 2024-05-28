import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          Standardizing Gno.land dApp Development with TypeScript
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A proposal to create a common TypeScript interface for Gno.land
          blockchain clients, enhancing interoperability and developer
          experience.
        </p>
        <a
          href="https://github.com/gnolang/gno-js-client/issues/119"
          target="_blank"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>

      {/* Proposal Section */}
      <div id="proposal" className="mt-12 p-8 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Proposal Overview</h2>
        <p className="mb-4">
          To enhance interoperability and streamline the development of
          decentralized applications (dApps) on the Gno.land blockchain, we
          propose creating a common TypeScript interface. This interface will
          standardize the methods and properties required to interact with the
          Gno.land blockchain, ensuring that different implementations can be
          easily integrated and maintained.
        </p>

        <h3 className="text-xl font-bold mb-2">Issues</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Discussion on{" "}
            <code>
              <a href="#asdf">getBalance</a>
            </code>{" "}
            Method for GnoLandClient Interface
          </li>
          <li>
            Discussion on{" "}
            <code>
              <a href="#asdf">getAccount</a>
            </code>{" "}
            Method for GnoLandClient Interface
          </li>
          <li>
            Discussion on <code>connect</code> Method for GnoLandClient
            Interface
          </li>
          <li>
            Discussion on <code>sendTransaction</code> Method for GnoLandClient
            Interface
          </li>
          <li>
            Discussion on <code>queryState</code> Method for GnoLandClient
            Interface
          </li>
          <li>
            Discussion on <code>subscribe</code> Method for GnoLandClient
            Interface
          </li>
          <li>
            Discussion on <code>disconnect</code> Method for GnoLandClient
            Interface
          </li>
        </ul>

        <p className="text-gray-700">
          * Creating separate issues for each method will allow focused
          discussions and detailed feedback.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
