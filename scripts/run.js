const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory(
		'MyEpicGame'
	)
	const gameContract = await gameContractFactory.deploy(
		['Deadpool', 'Mouse', 'Whale'],
		[
			'https://avatarfiles.alphacoders.com/129/129094.jpg',
			'https://assets.manufactum.de/p/085/085548/85548_02.jpg/koesen-white-mouse.jpg',
			'https://images.theconversation.com/files/398272/original/file-20210503-17-10vkbfa.png',
		],
		[9999, 50, 300], // HP values
		[10, 50, 500], // Attack damage values
		'Michael Scott', // Boss name
		'https://tweakyourbiz.com/wp-content/uploads/2018/05/0000007501_20060920143802-1-286x300.jpg', // Boss image
		10000, // Boss hp
		50 // Boss attack damage
	)

	await gameContract.deployed()
	console.log('Contract deployed to:', gameContract.address)

	let txn
	// We only have three characters.
	// an NFT w/ the character at index 2 of our array.
	txn = await gameContract.mintCharacterNFT(2)
	await txn.wait()

	txn = await gameContract.attackBoss()
	await txn.wait()

	txn = await gameContract.attackBoss()
	await txn.wait()

	console.log('Done!')
}

const runMain = async () => {
	try {
		await main()
		process.exit(0)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

runMain()
