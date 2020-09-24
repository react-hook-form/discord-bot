const { prefix } = require('../config.json');
const createStatsChannels = require('../helpers/createStatsChannels');
const getStatsCategory = require('../helpers/getStatsCategory');

module.exports = {
  name: 'create-stats-channels',
  description: 'This command will create "📊 Stats" category an all its children',
  aliases: ['csc'],
  guildOnly: true,
  roles: ['admin', 'bot'],
  execute(message) {
    const { guild } = message;

    if (getStatsCategory(guild)) {
      return message.channel.send(
        `📊 Stats already exists. Try running \`${prefix}delete-stats-channels\` or \`${prefix}update-stats-channels\` first`
      );
    }

    message.reply('Creating stats channels!');
    message.delete({ timeout: 1000, reason: 'Cleanup' });

    createStatsChannels(guild);
  }
};
