import { useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export default function RewardPage() {
  const [loading, setLoading] = useState(false);

  const claimReward = async () => {
    setLoading(true);
    try {
      const [account] = await window.keplr.getKey("andromeda-1");
      const offlineSigner = window.getOfflineSigner("andromeda-1");
      const client = await SigningCosmWasmClient.connectWithSigner(
        "https://testnet-rpc.andromeda.zone",
        offlineSigner
      );

      const contractAddress = "BURAYA_REWARDNFT_SÖZLEŞME_ADRESİNİ_YAZ";

      const result = await client.execute(
        account.bech32Address,
        contractAddress,
        {
          claim_reward: {
            task_id: 1,
            uri: "https://ipfs.io/ipfs/QmRewardNFTExample",
          },
        },
        "auto"
      );

      console.log("Ödül başarıyla alındı:", result);
      alert("🎉 Ödül NFT zincire basıldı!");
    } catch (error) {
      console.error("Hata oluştu:", error);
      alert("Bir sorun oluştu.");
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Görev Ödül Sayfası</h1>
      <button
        onClick={claimReward}
        className="px-6 py-2 bg-purple-600 text-white rounded"
        disabled={loading}
      >
        {loading ? "İşleniyor..." : "Ödül Al"}
      </button>
    </div>
  );
}
