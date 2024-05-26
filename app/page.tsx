export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="p-24">Web3 Library Comparison (web3-compare)</h1>
      <div className="flex items-center justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Library</th>
              <th className="px-4 py-2">Chain</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Response Type</th>
              <th className="px-4 py-2">Response Sample</th>
              <th className="px-4 py-2">Sample Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://npmjs.com/package/@gnolang/gno-js-client"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @gnolang/gno-js-client
                </a>
              </td>
              <td className="border px-4 py-2">Gno.land</td>
              <td className="border px-4 py-2">
                <p className="json-style">getBalance</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">number</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">9790000000</p>
              </td>
              <td className="border px-4 py-2">
                <a href="/balance/gno">sample</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
