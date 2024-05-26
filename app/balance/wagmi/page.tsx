"use client";
import { useEffect, useState } from "react";
import {
  GetBalanceReturnType,
  getBalance,
  createConfig,
  http,
} from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { stringify } from "@/libs/utils";

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const GnoBalance = () => {
  const [balance, setBalance] = useState<GetBalanceReturnType | null>(null);

  useEffect(() => {
    (async () => {
      const reponse = await getBalance(config, {
        address: "0x4557B18E779944BFE9d78A672452331C186a9f48",
      });
      setBalance(reponse);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="json-style">{balance && stringify(balance)}</p>
    </div>
  );
};

export default GnoBalance;
