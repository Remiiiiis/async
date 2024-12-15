async function fetchWallet(wallet, index, isExtended, isFetch = false) {

    let agent = getProxy(index, true)

    let data = {
        wallet: wallet,
        clusters: '',
        tx_count: 0,
        source_chain_count: 0,
        source_chain: '',
        dest_chain_count: 0,
        dest_chain: '',
        contracts: 0,
        days: 0,
        weeks: 0,
        months: 0,
        first_tx: '',
        last_tx: '',
        badProtocolsCount: 0,
        sources: {},
        destinations: {},
        protocols: {},
    }
