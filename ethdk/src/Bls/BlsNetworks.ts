import { type BlsNetwork } from '../interfaces/Network'

const localhost: BlsNetwork = {
  name: 'localhost',
  chainId: 31337,
  rpcUrl: 'http://localhost:8545',
  aggregatorUrl: 'http://localhost:3000',
  verificationGateway: '0x689A095B4507Bfa302eef8551F90fB322B3451c6',
}

const NETWORKS = {
  localhost,
}

export function getNetwork(name?: string): BlsNetwork {
  if (name === 'localhost' || name === undefined) {
    return NETWORKS.localhost
  }
  throw new Error('Unsupported network')
}
