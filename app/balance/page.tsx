export default function Home() {
  return (
    <div className="container mx-auto my-8 overflow-x-scroll">
      <div className="mx-auto">
        <h1>getBalance</h1>
        <table className="table-fixed w-full">
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
                <p className="json-style">getBalance</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">number</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">9790000000</p>
              </td>
              <td className="border px-4 py-2">
                <a href="/balance/gno">sample code</a>
              </td>
            </tr>
            <tr className="border px-4 py-2">
              <td className="border px-4 py-2">wagmi / viem</td>
              <td className="border px-4 py-2">Ethereum</td>
              <td className="border px-4 py-2">
                <p className="json-style">getBalance</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">Object</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">
                  {JSON.stringify(
                    {
                      decimals: 18,
                      formatted: "22.760036845242167424",
                      symbol: "ETH",
                      value: "22760036845242167424",
                    },
                    null,
                    2,
                  )}
                </p>
              </td>
              <td className="border px-4 py-2">
                <a href="/balance/wagmi">sample code</a>
                <br />
                <br />
                <a href="https://wagmi.sh/core/api/actions/getBalance#getbalance">
                  api docs
                </a>
              </td>
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
                <p className="json-style">getBalance</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">number</p>
              </td>
              <td className="border px-4 py-2">
                <p className="json-style">
                  {JSON.stringify(
                    {
                      accountInfo: {
                        address: "o0sZ1ZkrVp5FTS5LbMci+ii98xk=",
                        coins: [{ denom: "ugnot", amount: "9786000000" }],
                        pubKey:
                          "ChMvdG0uUHViS2V5U2VjcDI1NmsxEiMKIQNY5MlpZfA98zIWR8L0vFnINS7e6Do+uH06+fczPe43Hg==",
                        accountNumber: "101",
                        sequence: "5",
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
