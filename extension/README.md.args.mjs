export const extraContents = `## Using EIP-5792

This example leverages wagmi's experimental EIP-5792 hooks to interact with contracts using coinabse smart wallet sdk and erc-7677 for sponsorship of gas.

1. start your NextJS app:

\`\`\`
yarn start
\`\`\`

Visit the eip-5792 example interface on http://localhost:3000/eip5792.

This interface interact with \`Example.sol\` present at \`packages/hardhat/contracts/Example.sol\`.

Checkout \`packages/nextjs/app/eip5792/_components/EIP5792.tsx\` for an example of how to interact with the smart contracts using EIP-5792 compliant wallet.

2. Using batch transactions and gas sponsorship

Since we won't be able to use this functions on local chain, we can deploy the contracts to \`baseSepolia\` & \`sepolia\` networks to test the batch transactions and gas sponsorship.

Run \`yarn deploy --baseSepolia\` to deploy the contract to base network. Same can be done for sepolia network.

3. Update \`targetNetworks\` in \`scaffold.config.ts\` to include \`chains.baseSepolia\` and \`chains.sepolia\` networks.

\`\`\`diff
 ...
- targetNetworks: [chains.hardhat]
+ targetNetworks: [chains.baseSepolia]
// or you can add both networks
+ targetNetworks: [chains.baseSepolia, chains.sepolia]
 ...
\`\`\`


4. Configure paymaster URL

> Checkout out this awesome example by Kristof on how to get erc-7677 proxy sever URL [here](https://x.com/kristofgazso/status/1791202175676191113), checkout the template repo [here](https://github.com/pimlicolabs/erc7677-proxy/tree/main)

Once you get the paymaster URL, add it in \`packages/nextjs/.env.local\` :

\`\`\`
NEXT_PUBLIC_BASE_SEPOLIA_PAYMASTER_URL=https://...
NEXT_PUBLIC_SEPOLIA_PAYMASTER_URL=https://...
\`\`\`

## Resources on EIP-5792

- EIP 5792 : https://www.eip5792.xyz/introduction
- ERC 7677 (gas sponsorship compliant with EIP-5792): https://www.erc7677.xyz/introduction
- Krstof ERC 7677 sponsorship with pimlico proxy : https://x.com/kristofgazso/status/1791202175676191113
- Lukas showing compound example(utilizing viem actions) : https://x.com/WilsonCusack/status/1781068164077412504
- Wilson wagmi-scw repo : https://github.com/wilsoncusack/wagmi-scw`;
