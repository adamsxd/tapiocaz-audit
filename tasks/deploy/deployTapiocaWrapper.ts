import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { typechain } from 'tapioca-sdk';
import { loadVM } from '../utils';

//TODO: remove transferOwnership param after CU-85zrubh6u implementation
export const deployTapiocaWrapper__task = async (
    taskArgs: { overwrite?: boolean; transferOwnership?: boolean },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log('[+] Deploying TapiocaWrapper...');

    const tag = await hre.SDK.hardhatUtils.askForTag(hre, 'local');

    const { overwrite } = taskArgs;

    const signer = (await hre.ethers.getSigners())[0];
    const chainId = String(hre.network.config.chainId);

    // Check if already deployed
    const prevDeployment = hre.SDK.db.getLocalDeployment(
        chainId,
        'TapiocaWrapper',
        tag,
    );
    if (prevDeployment && !overwrite) {
        console.log(
            `[-] TapiocaWrapper already deployed on ${hre.network.name} at ${prevDeployment.address}`,
        );
        return;
    }

    const tapiocaWrapper = await hre.ethers.getContractFactory(
        'TapiocaWrapper',
    );

    const deployerVM = await loadVM(hre, tag);

    const _owner = taskArgs.transferOwnership
        ? await deployerVM.getMultisig(signer.address).address //TODO: remove param after CU-85zru6ag7 implementation
        : signer.address;

    deployerVM.add({
        contract: tapiocaWrapper,
        args: [_owner],
        deploymentName: 'TapiocaWrapper',
    });
    await deployerVM.execute(3);
    deployerVM.save();
    await deployerVM.verify();
};
