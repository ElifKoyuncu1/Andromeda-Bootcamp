## 🧠 **AndroLearn**  
Andromeda Bootcamp kapsamında geliştirilen **AndroLearn**, Web2 geliştiricilerini Web3 dünyasına adım adım dahil etmeyi amaçlayan bir **Öğren-Kazan (Learn-to-Earn)** platformudur. Kullanıcılar, hem teorik bilgileri öğrenir hem de zincir üstü görevleri tamamlayarak dijital ödüller kazanır.

---

## 🌌 **Hakkımda**  
Merhaba, ben **Elif Koyuncu**. Gümüşhane Üniversitesi’nde Yönetim Bilişim Sistemleri okuyorum. Web3 teknolojilerine duyduğum ilgi, beni Andromeda Bootcamp’e katılmaya yönlendirdi.  
Bu projeyle amacım, benim gibi Web2 geçmişine sahip olanların Web3’e geçiş sürecini kolaylaştırmak, pratik görevlerle bu dünyayı deneyimlemelerini sağlamaktır.

**AndroLearn**, bu süreci yansıtan bir araç:  
Yeni başlayanlara destek olmayı, onları öğrenerek üretmeye teşvik etmeyi ve zincir üstü deneyimi herkes için erişilebilir kılmayı hedefliyor.

---

## 📘 **Proje Detayları**  
**AndroLearn**, kullanıcıların Web3'e dair temel konuları öğrendikleri ve öğrendiklerini uygulayarak zincir üzerinde **NFT** veya **token** gibi ödüller kazandıkları bir platformdur.

Kapsadığı ana başlıklar:
- Cüzdan oluşturma ve bağlama (Keplr / Hiro Wallet)  
- Akıllı sözleşme ile ilk etkileşim  
- Token gönderme / alma görevleri  
- NFT alma / mint etme deneyimi

Uygulama, kullanıcıya hem eğitsel bir yol haritası sunar hem de her görevi birer “seviye” gibi konumlandırarak Web3’e alışmalarını sağlar.

✅ Basit Mantık:
**Öğren → Görevleri Tamamla → Ödül Kazan (zincir üstü deneyim)**

---

## 🌍 **Vizyon**  
Web3, teknik terimler ve karmaşık süreçlerle yeni başlayanlar için erişilmesi zor bir alan gibi görünebilir.  
**AndroLearn**, bu engelleri yıkmak için var:  
- Anlaşılır içeriklerle bilgi verir,  
- Basit görevlerle deneyim kazandırır,  
- Kullanıcının zincirle etkileşimini ödüllendirir.

Bu sayede sadece "öğreten" değil, aynı zamanda **katılımı teşvik eden** bir sistem yaratılmış olur.

Gelecekte platform:
- Daha fazla görev ve konu başlığı eklenerek zenginleştirilecek  
- Türkçe ve İngilizce dil desteğiyle uluslararası erişime açılacak  
- Sertifikalı eğitim modülü ve kullanıcı ilerleme takibi gibi özelliklerle genişletilecektir.

---

## 🚀 Features

- 📚 Web3 learning modules (wallets, smart contracts, dApps)
- ✅ Task-based progression with on-chain verification
- 🎁 NFT and token rewards (learn-to-earn)
- 🔗 Andromeda blockchain integration
- 🛡️ Final certification as an NFT
- 🌐 User-friendly and beginner-focused interface

---

## 🛠️ Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Frontend    | Next.js, Tailwind CSS       |
| Backend     | Node.js (for task logic)    |
| Blockchain  | Andromeda (Testnet)         |
| Contracts   | CosmWasm / Clarity          |
| Wallet      | Keplr / Hiro Wallet         |
| Storage     | IPFS (NFT metadata)         |

---

## 🧪 Smart Contract Modules

- `TaskManager`: Verifies task completion and tracks progress
- `RewardNFT`: Mints NFTs after completing specific tasks
- `AndroToken`: Optional reward token contract (ERC20-style)

---

## 🧭 User Flow

1. Connect wallet  
2. Start learning modules  
3. Complete a task (e.g., send transaction on testnet)  
4. Smart contract verifies the action  
5. Receive reward on-chain (NFT or token)  
6. Track progress and collect final certification

---

## 🔧 Installation (for devs)

```bash
git clone https://github.com/elifkoyuncu/AndroLearn.git
cd AndroLearn
yarn install
yarn dev
```

---

## 🔧 Deployment Note

For smart contracts:  
Use **CosmWasm** or **Clarinet** to deploy contracts on the **Andromeda testnet**.  
Make sure to configure the network endpoints and wallet connection properly.

---

## 📍 Project Status

This is a **bootcamp-stage MVP**.  
- ✅ Frontend is functional  
- ⚙️ Smart contract modules are currently under development  
- 🔜 Next step: Enabling live reward minting on testnet

---

## 🤝 Acknowledgements

Thanks to the **Rise In** team for providing a rich learning environment and strong community support.  
This project was built to support other learners like me who are taking their first steps into Web3.

