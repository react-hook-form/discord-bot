const getStatsCategory = require('./getStatsCategory');

module.exports = guild => {
  const statsCategory = getStatsCategory(guild);

  statsCategory.children.forEach(child => {
    child.delete('Making room for new channels');
  });
  statsCategory.delete('Making room for new channels');
};
