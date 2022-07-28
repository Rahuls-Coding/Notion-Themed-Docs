import Head from 'next/head'
import Image from 'next/image'
import { Alert, Title, Text, Mark, Code } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle } from '@tabler/icons';

export default function Home() {
  return (
    <div>
      <div className="bg-red-500 border-4 border-red-500">
        <div className="h-44"></div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="h-10"></div>
        <Title order={1} className='py-3 text px-2'>Ethereum</Title>
        <Title order={3} className='py-3 text px-2'>Introduction</Title>
        <Text size='sm' className="px-2 text">
          After reading the previous article you now should have a tip of the iceberg level of understanding for how blockchains work and how transactions are made. Just remember that the type blockchain that we learned in the previous article applies to most of the blockchains like, Ethereum and Bitcoin. We&#39;re now going to go deeper and focus onto a single blockchain, Ethereum. 
          </Text>
        <div className="py-4 px-2">
          <Alert icon={<IconAlertCircle size={16} />} color="grape">
          Note, that transactions and decentralized banking are just a few of the things you can do with blockchains. With blockchains like Ethereum, it can be used for healthcare, travel, education, and etc.           </Alert>
        </div>
        <Title order={3} className='py-3 text px-2'>Accounts</Title>
        <Text size='sm' className='px-2 text'>
          There are mainly 2 types of Ethereum accounts. <Mark>Externally owned accounts</Mark> (EOA) & contract accounts. Externally owned accounts are often accounts that are owned by Ethereum users. EOA&#39;s will be elaborated further in the next section. The second type of Ethereum account are <Mark>Contract Accounts</Mark>. Contract accounts are accounts that can be thought of as programs (they are associated with code) that are executed when a transaction is received. Contract accounts are often called smart contracts, in short, smart contracts are programs that are deployed to Ethereum network and run as programmed. Smart contracts can make transactions over the network and do have a balance. 
        </Text>
        <div className="py-4 px-2">
          <Alert icon={<IconAlertTriangle size={16} />} color="green">
          Keep in mind that contract accounts can&#39;t create transactions themselves, the transaction that is received by the contract account must be originated by an EOA.         
          </Alert>
        </div>
        <Title order={3} className="py-3 px-2 text">EOA&#39;s & Wallets</Title>
        <div>
          <Text size='sm' className="px-2 text">
              Externally owned accounts as mentioned above, are owned by real people and real Ethereum users. EOA&#39;s have an <Text variant="link" component="a" href="https://www.youtube.com/watch?v=AQDCe585Lnc&feature=youtu.be">asymmetric cryptographic encryption</Text> consisting of a <Mark color="green">public</Mark> and a <Mark color="orange">private</Mark> key. These keys are used to encrypt your Ethereum account. Your public key is a 20 byte string consisting of 40 characters. <Mark color="green">Public keys can be shared with anyone and are often used to encrypt messages.</Mark> But before going any farther with cryptographic keys, it&#39;s important to know what a crypto wallet is. A <Mark>wallet</Mark> in the blockchain world is basically a tool that safely stores your cryptographic keys (as mentioned earlier) & cryptocurrencies. This tool also allows you to securely access your cryptocurrencies, while also allowing you to buy, sell, and trade crypto like Ethereum. There are a lot of different wallets, one of the more popular ones is MetaMask which is mainly used for Ethereum. Other wallets like Phantom, are used for the Solana Blockchain. These wallets have wallet addresses which are used to identify one&#39;s wallet.  For example, my MetaMask wallet address is <Code color="red">0xF47FE312Cb845DE0B1fc2Db4e9d7971a28B5CFCD</Code>. My wallet address starts with <Code color='red'>0x</Code> and continues with my public key - <Code color="red">F47FE312Cb845DE0B1fc2Db4e9d7971a28B5CFCD</Code>. Ethereum uses the <Code color='red'>0x</Code> in front of the wallet address because it allows Ethereum tokens to be exchanged over any decentralized exchange using the protocol. <Mark color="orange">However, a private key on the other hand CANNOT be shared with anyone and are used to decrypt messages.</Mark> Private keys are very important as they are used for 2 major things: one, they are used for decryption (remember anyone can encrypt a message but only certain can decrypt the message) and second, they are used to verify the ownership of a blockchain address. That&#39;s why it&#39;s super important that your private key is never shared. 
          </Text>
        </div>
        <Title order={3} className="py-3 px-2 text">Miners</Title>
        <Text size='sm' className="px-2 text">
        A <Mark>miner</Mark> is someone who secures the <Mark>network</Mark> by performing the process of creating a block of transactions to add them to the Ethereum blockchain. Mines have to <Mark color='blue'>use/spend resources and computational power</Mark> in-order to solve mathematical puzzles to “mine” blocks. As a reward, miners receive 2 <Code color='red'>ETH</Code> per block mined plus any priority fees contained in the block. To sum all this up into one sentence, just remember that miners mine blocks of transactions and get rewarded with <Code color='red'>ETH</Code> in exchange for their computational resources. Mining is a subject doesn&#39;t need to be emphasized nor is it extremely important to learn ethereum, but it&#39;s good to have an idea of what it&#39;s about. 
        </Text>
      </div>
    </div>
  )
}
