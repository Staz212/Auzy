const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick a user from the server.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Select the user to kick')
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('Specify the reason for kicking the user')
		),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') || 'No reason specified';
		await interaction.reply(`Kicked user ${user} for: ${reason}`);
	},
};

/*
basic code kick commands
by staz
*/
