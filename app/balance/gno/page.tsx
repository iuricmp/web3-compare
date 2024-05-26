"use client";
import { useEffect, useState } from "react";
import { GnoJSONRPCProvider } from "@gnolang/gno-js-client";

const GnoBalance = () => {
  const gnoprovider = new GnoJSONRPCProvider("https://api.gno.berty.io");

  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const reponse = await gnoprovider.getBalance(
        "g1xdwm7ggvuulnt283drk9s70hqkfzztkmaql7en",
      );
      setBalance(reponse);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="json-style">
        {balance && JSON.stringify(balance, null, 2)}
      </p>
    </div>
  );
};

export default GnoBalance;
