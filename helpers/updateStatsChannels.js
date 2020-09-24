const fetchPackageData = require('./fetchPackageData');
const getChannelName = require('./getChannelName');
const getStatsCategory = require('./getStatsCategory');
const statChannels = require('./statChannels');

module.exports = async guild => {
  const data = await fetchPackageData();
  const statsCategory = getStatsCategory(guild);

  statsCategory.children.forEach(async child => {
    const [name] = child.name.split(':');
    const statChannel = statChannels.find(channel => channel.name === name);

    const channelName = getChannelName(statChannel, data);

    await child.edit({ name: channelName }, 'Updating data');
    child.overwritePermissions([
      {
        id: guild.roles.everyone.id,
        deny: ['CREATE_INSTANT_INVITE', 'CONNECT', 'SPEAK']
      }
    ]);
  });

  statsCategory.edit({ position: 0 }, 'Moving stats to the top');
};
