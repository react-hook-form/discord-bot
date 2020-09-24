module.exports = (channel, data) => {
  const { name, key, transform } = channel;
  const value = data[key];
  const channelName = `${name}: ${transform ? transform(value) : value}`;

  return channelName;
};
