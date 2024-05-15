const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Display the avatar of the user who ran the command.'),
	async execute(interaction) {
		const user = interaction.user;
		await interaction.reply(`Your avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	},
};

