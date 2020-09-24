const fetchPackageData = require('./fetchPackageData');
const getChannelName = require('./getChannelName');
const statChannels = require('./statChannels');

module.exports = async guild => {
  const data = await fetchPackageData();

  const statsCategory = await guild.channels.create('📊 Stats', {
    type: 'category',
    reason: 'Needed to show stats',
    permissionOverwrites: [
      {
        id: guild.roles.everyone.id,
        deny: ['CREATE_INSTANT_INVITE', 'CONNECT', 'SPEAK']
      }
    ]
  });

  statChannels.forEach(statChannel => {
    const channelName = getChannelName(statChannel, data);

    guild.channels.create(channelName, {
      type: 'voice',
      parent: statsCategory,
      reason: `Needed to show ${statChannel.name.toLowerCase()}`
    });
  });

  statsCategory.edit({ position: 0 }, 'Moving stats to the top');
};
