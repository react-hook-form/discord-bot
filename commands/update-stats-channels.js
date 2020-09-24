const { prefix } = require('../config.json');
const getStatsCategory = require('../helpers/getStatsCategory');
const updateStatsChannels = require('../helpers/updateStatsChannels');

module.exports = {
  name: 'update-stats-channels',
  description: 'This command will update "📊 Stats" children data',
  aliases: ['usc'],
  guildOnly: true,
  roles: ['admin', 'bot'],
  execute(message) {
    const { guild } = message;

    if (!getStatsCategory(guild)) {
      return message.channel.send(`Could't find 📊 Stats category. Try running \`${prefix}create-stats-channels\` first`);
    }

    message.reply('Updating stats channels!');
    message.delete({ timeout: 1000, reason: 'Cleanup' });

    updateStatsChannels(guild);
  }
};
