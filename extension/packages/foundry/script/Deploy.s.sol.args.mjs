export const deploymentsScriptsImports = `import "./DeployExampleContract.s.sol";`;
export const deploymentsLogic = `
  DeployExampleContract deployExampleContract = new DeployExampleContract();
  deployExampleContract.run();
`;
