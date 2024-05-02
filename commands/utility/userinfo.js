const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user adalah objek yang mewakili Pengguna yang menjalankan perintah
    //interaction.member adalah objek GuildMember, yang mewakili pengguna di guild tertentu

		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};

/*
basic code userinfo
by staz
*/
