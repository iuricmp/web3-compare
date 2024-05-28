export default function Home() {
  return (
    <div className="container mx-auto my-8 overflow-x-scroll">
      <div className="mx-auto">
        <h1>getBalance</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Library</th>
              <th className="px-4 py-2">Chain</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Response Type</th>
              <th className="px-4 py-2" style={{ width: 500 }}>
                Response Sample
              </th>
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
                <p className="json-style"></p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style"></p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style"></p>
              </td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr className="border px-4 py-2">
              <td className="border px-4 py-2">wagmi / viem</td>
              <td className="border px-4 py-2">Ethereum</td>
              <td className="border px-4 py-2">
                <p className="json-style"></p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style"></p>
              </td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://npmjs.com/package/@gnolang/gnonative"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @gnolang/gnonative
                </a>
              </td>
              <td className="border px-4 py-2">Gno.land</td>
              <td className="border px-4 py-2">
                <p className="json-style">getAccount</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">Object</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">
                  {JSON.stringify(
                    {
                      accountInfo: {
                        address: "wzxJcs07YqjpLpTaJY0yfbMjxVE=",
                        coins: [{ denom: "ugnot", amount: "9764000000" }],
                        pubKey: "",
                        accountNumber: "112",
                        sequence: "0",
                      },
                    },
                    null,
                    2,
                  )}
                </p>
              </td>
              <td className="border px-4 py-2">
                <a href="/balance/gno">sample code</a>
                <br />
                <br />
                <a href="https://github.com/gnolang/gno/blob/master/gno.land/pkg/gnoclient/client_queries.go#L41">
                  gnoclient reference
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
