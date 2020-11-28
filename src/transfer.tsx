import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BlockHttp, TransactionHttp, Mosaic, NetworkCurrencyMosaic } from 'tsjs-xpx-chain-sdk';
import { TransferTransaction, Deadline, Account, NetworkType, PlainMessage, Address } from 'tsjs-xpx-chain-sdk';


class Trans extends Component {


    transfer() {
        const privateKey = '34DAB8CDC6040342B3F4336BF9D20399FFA2784DC63BC55000B006EC8B5804D2';
        const transactionHttp = new TransactionHttp('https://bctestnet2.brimstone.xpxsirius.io');
        const blockHttp = new BlockHttp('https://bctestnet2.brimstone.xpxsirius.io');

        //quien recive
        const recipientAddress = Address.createFromRawAddress('VARHPD-EVNUML-F5EYE2-SXVBON-KRNMWL-XCSRWT-4ZG3');
        //const recipientAddress = Address.createFromRawAddress('VDHJIG-C7R7C7-SGRD4L-3BSFY4-6563D7-B6XQVB-ZTEI');
        //crear transfer
        const transferTransaction = TransferTransaction.create(
            Deadline.create(),
            recipientAddress,
            [NetworkCurrencyMosaic.createRelative(1)],
            //NetworkCurrencyMosaic.createRelative(1)
            PlainMessage.create('Hola React!'),
            NetworkType.TEST_NET
        );
        // hash
        const generationHash = "56D112C98F7A7E34D1AEDC4BD01BC06CA2276DD546A93E36690B785E82439CA9";
        // cuenta
        const account = Account.createFromPrivateKey(privateKey, NetworkType.TEST_NET);
        const signedTx = account.sign(transferTransaction, generationHash);

        //aununciar la transacción
        transactionHttp.announce(signedTx).subscribe(
            () => console.log('Texto enviado!'),
            error => console.log(error)
        );

    }



    render() {
        return (
            <div>
                <button onClick={this.transfer}><a>Transfer</a></button>
            </div>
        );
    }
}

export default Trans;