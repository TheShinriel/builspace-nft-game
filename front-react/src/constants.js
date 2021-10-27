export const CONTRACT_ADDRESS = '0xBbBc51F5B642B3AA05c0A7d2a0524c1fc34b4ecD'

export const transformCharacterData = (characterData) => {
	const converted = {
		name: characterData.name,
		imageURI: characterData.imageURI,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		attackDamage: characterData.attackDamage.toNumber(),
	}
	console.log(characterData.name, converted)
	return converted
}
