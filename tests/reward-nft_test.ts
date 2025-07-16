import { Clarinet, Tx, Chain, Account } from "https://deno.land/x/clarinet/index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Clarinet.test({
  name: "Kullanıcı ödül URI’sini başarıyla talep edebilir",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let user = accounts.get("wallet_1")!;

    // Ödül URI’si
    let uri = '"https://ipfs.io/ipfs/QmRewardNFTExample"';

    let block = chain.mineBlock([
      Tx.contractCall("RewardNFT", "claim-reward", ["u1", uri], user.address),
    ]);

    block.receipts[0].result.expectOk(uri);

    // URI’yi kontrol et
    let result = chain.callContract("RewardNFT", "get-reward-uri", ["u1"], user.address);
    result.result.expectOk(uri);
  },
});
