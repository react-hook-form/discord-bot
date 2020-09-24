module.exports = guild => {
  const statsChannel = guild.channels.cache.find(channel => channel.type === 'category' && channel.name === '📊 Stats');

  return statsChannel;
};
