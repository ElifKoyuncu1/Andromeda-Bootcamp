# 🧠 AndroLearn

A Learn-to-Earn platform built for onboarding Web2 developers into the Web3 world, created during the **Andromeda Bootcamp**.

## 🌌 About Me

Hi, I'm Elif Koyuncu, a Management Information Systems student passionate about Web3 technologies. I joined the Andromeda Bootcamp to transition from Web2 to Web3 and build a meaningful project. *AndroLearn* reflects this journey — a platform to help others learn and earn while exploring the decentralized web.

## 📘 Project Details

**AndroLearn** is a Web3 onboarding platform where users complete small educational tasks about blockchain technology and earn on-chain rewards such as NFTs or tokens. Designed for beginners, the platform guides users step-by-step — from setting up a wallet to interacting with smart contracts on the Andromeda blockchain.

It’s simple:  
**Learn → Complete Tasks → Earn Rewards (on-chain).**

## 🌍 Vision

Web3 can seem intimidating to newcomers. AndroLearn aims to break those barriers by offering an interactive, rewarding, and engaging learning path. By gamifying the learning process and providing real blockchain interactions, we empower the next generation of decentralized builders to start strong.

## 🚀 Features

- 📚 Web3 learning modules (wallets, smart contracts, dApps)
- ✅ Task-based progression with on-chain verification
- 🎁 NFT and token rewards (learn-to-earn)
- 🔗 Andromeda blockchain integration
- 🛡️ Final certification as an NFT
- 🌐 User-friendly and beginner-focused interface

## 🛠️ Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Frontend    | Next.js, Tailwind CSS       |
| Backend     | Node.js (for task logic)    |
| Blockchain  | Andromeda (Testnet)         |
| Contracts   | CosmWasm / Clarity          |
| Wallet      | Keplr / Hiro Wallet         |
| Storage     | IPFS (NFT metadata)         |

## 🧪 Smart Contract Modules

- `TaskManager`: Verifies task completion and tracks progress
- `RewardNFT`: Mints NFTs after completing specific tasks
- `AndroToken`: Optional reward token contract (ERC20-style)

## 🧭 User Flow

1. Connect wallet  
2. Start learning modules  
3. Complete a task (e.g., send transaction on testnet)  
4. Smart contract verifies the action  
5. Receive reward on-chain (NFT or token)  
6. Track progress and collect final certification

## 🔧 Installation (for devs)

```bash
git clone https://github.com/elifkoyuncu/AndroLearn.git
cd AndroLearn
yarn install
yarn dev
```

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

