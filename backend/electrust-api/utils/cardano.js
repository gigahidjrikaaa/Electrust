const { execSync } = require('child_process');
const path = require('path');

const CARDANO_CLI_PATH = process.env.CARDANO_CLI_PATH || 'cardano-cli';
const SOCKET_PATH = process.env.CARDANO_NODE_SOCKET_PATH || '/path/to/node.socket';
const NETWORK = process.env.CARDANO_NETWORK || 'testnet';

const buildTransaction = (txIn, txOut, amount, scriptAddress) => {
    // Construct the Cardano CLI command
    const command = `${CARDANO_CLI_PATH} transaction build-raw \
        --tx-in ${txIn} \
        --tx-out ${txOut}+${amount} \
        --tx-out ${scriptAddress}+${amount} \
        --fee 0 \
        --out-file tx.raw`;

    // Execute the command
    execSync(command);
    console.log('Transaction built successfully');
};

const signTransaction = (signingKeyFile) => {
    // Construct the Cardano CLI command
    const command = `${CARDANO_CLI_PATH} transaction sign \
        --signing-key-file ${signingKeyFile} \
        --tx-body-file tx.raw \
        --out-file tx.signed`;

    // Execute the command
    execSync(command);
    console.log('Transaction signed successfully');
};

const submitTransaction = () => {
    // Construct the Cardano CLI command
    const command = `${CARDANO_CLI_PATH} transaction submit \
        --tx-file tx.signed \
        --${NETWORK}-mode`;

    // Execute the command
    execSync(command);
    console.log('Transaction submitted successfully');
};

module.exports = {
    buildTransaction,
    signTransaction,
    submitTransaction,
};
