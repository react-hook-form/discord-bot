const { prefix } = require('../config.json');
const deleteStatsChannels = require('../helpers/deleteStatsChannels');
const getStatsCategory = require('../helpers/getStatsCategory');

module.exports = {
  name: 'delete-stats-channels',
  description: 'This command will delete "📊 Stats" category an all its children',
  aliases: ['dsc'],
  guildOnly: true,
  roles: ['admin', 'bot'],
  execute(message) {
    const { guild } = message;

    if (!getStatsCategory(guild)) {
      return message.channel.send(`Could't find 📊 Stats category. Try running \`${prefix}create-stats-channels\` first`);
    }

    message.reply('Deleting stats channels!');
    message.delete({ timeout: 1000, reason: 'Cleanup' });

    deleteStatsChannels(guild);
  }
};
