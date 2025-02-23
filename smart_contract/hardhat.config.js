//

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/E5cvrsbaaPIdp7nOSqtCjiIwu1TAcq1b',
      accounts: ['df5151421cd157bf6f2dfb91d42aa1128afc1460a8862fea57647bcd3425a55c'],
    },
  },
};