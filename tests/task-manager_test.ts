import { Clarinet, Tx, Chain, Account } from "https://deno.land/x/clarinet/index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Clarinet.test({
  name: "Görevin tamamlanması doğru şekilde kaydedilir",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;
    let user = accounts.get("wallet_1")!;

    // Görevi tamamla
    let block = chain.mineBlock([
      Tx.contractCall("TaskManager", "complete-task", ["u1"], user.address),
    ]);

    block.receipts[0].result.expectOk().expectBool(true);

    // Görev tamamlandı mı kontrol et
    let check = chain.callContract("TaskManager", "is-completed", ["u1"], user.address);
    check.result.expectOk().expectBool(true);
  },
});
