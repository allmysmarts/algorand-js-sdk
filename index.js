const algosdk = require("algosdk")
const algodClient = new algosdk.Algodv2("",'https://node.testnet.algoexplorerapi.io', '');
algodClient.getTransactionParams().do().then(data => {
    console.log('params: ', data)
})

algodClient.getApplicationByID(101114055).do().then(data => {
    console.log('application info: ', data)
})

algodClient.accountInformation("HUQBDTTQCYWVSGYIDY5DFCIG4RCJDHGU4H25H4VELW7FYICUFSFG255KCQ").do().then(data => {
    console.log('account: ', data)
})
console.log('loading params...')
