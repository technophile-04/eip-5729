export const extraContents = `## 🏗 Scaffold-ETH 2 🤝 EIP-5792

This example leverages wagmi's experimental EIP-5792 hooks to interact with contracts using coinabse smart wallet sdk and erc-7677 for sponsorship of gas.

### Quickstart

To get started, follow the steps below:

1. start your NextJS app:

\`\`\`
yarn start
\`\`\`

Visit your app on: \`http://localhost:3000\`.

checkout [\`packages/nextjs/app/eip5792/_components/EIP5792.tsx\`](https://github.com/technophile-04/se2-eip5792/blob/eip-5792-demo/packages/nextjs/app/_components/EIP5792.tsx) for an example of how to interact with the smart contracts using EIP-5792 compliant wallet.

You can interact with smart contracts which was deployed on \`baseSepolia\` & \`sepolia\`, contracts abi and address are present in [\`externalContracts.ts\`].

Since \`targetNetworks\` in [\`scaffold.config.ts\`] has \`baseSepolia\` and \`sepolia\` networks, the app will live on this new network.

2. Configure paymaster URL

> Checkout out this awesome example by Kristof on how to get erc-7677 proxy sever URL [here](https://x.com/kristofgazso/status/1791202175676191113), checkout the template repo [here](https://github.com/pimlicolabs/erc7677-proxy/tree/main)

Once you get the paymaster URL, add it in \`packages/nextjs/.env.local\` :

\`\`\`
NEXT_PUBLIC_BASE_SEPOLIA_PAYMASTER_URL=https://...
NEXT_PUBLIC_SEPOLIA_PAYMASTER_URL=https://...
\`\`\`

3. Tinkering with contracts on local chain.

Update \`targetNetworks\` in \`scaffold.config.ts\` to include \`hardhat\` and follow the [quick start](https://github.com/technophile-04/se2-eip5792/tree/eip-5792-demo?tab=readme-ov-file#quickstart) from Scaffold-ETH 2 repo

## Resources on EIP-5792

- EIP 5792 : https://www.eip5792.xyz/introduction
- ERC 7677 (gas sponsorship compliant with EIP-5792): https://www.erc7677.xyz/introduction
- Krstof ERC 7677 sponsorship with pimlico proxy : https://x.com/kristofgazso/status/1791202175676191113
- Lukas showing compound example(utilizing viem actions) : https://x.com/WilsonCusack/status/1781068164077412504
- Wilson wagmi-scw repo : https://github.com/wilsoncusack/wagmi-scw
`;
