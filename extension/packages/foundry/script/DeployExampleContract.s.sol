//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Example.sol";
import "./DeployHelpers.s.sol";

contract DeployExampleContract is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);
        Example exampleContract = new Example(vm.addr(deployerPrivateKey));
        console.logString(
            string.concat(
                "Example contract deployed at: ",
                vm.toString(address(exampleContract))
            )
        );
        vm.stopBroadcast();
    }
}
