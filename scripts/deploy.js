const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory(
		'MyEpicGame'
	)
	const gameContract = await gameContractFactory.deploy(
		['Deadpool', 'Mouse', 'Whale'],
		[
			'QmQCNE38e1MPVudyfRSSkbZZqcE8gH6xxvdifyLQBr7AwT',
			'QmT7xZZLRAX3yW7KhtH6FVtGqyYQbJdtx6HBBft7Th97Fm',
			'QmQCNE38e1MPVudyfRSSkbZZqcE8gH6xxvdifyLQBr7AwT',
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

	// let txn
	// We only have three characters.
	// an NFT w/ the character at index 2 of our array.
	// txn = await gameContract.mintCharacterNFT(2)
	// await txn.wait()

	// txn = await gameContract.attackBoss()
	// await txn.wait()

	// txn = await gameContract.attackBoss()
	// await txn.wait()

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
