module.exports = [
  {
    name: 'Version',
    key: 'version'
  },
  {
    name: 'Coverage',
    key: 'coverage',
    transform: value => `${+value * 100}%`
  },
  {
    name: 'Downloads',
    key: 'downloads',
    transform: value => shortenLargeNumber(value, 1)
  },
  {
    name: 'Open Issues',
    key: 'openIssues'
  },
  {
    name: 'Stars',
    key: 'stars',
    transform: value => shortenLargeNumber(value, 1)
  },
  {
    name: 'Size',
    key: 'size'
  },
  {
    name: 'Watchs',
    key: 'watchsCount',
    transform: value => shortenLargeNumber(value, 1)
  },
  {
    name: 'Forks',
    key: 'forks',
    transform: value => shortenLargeNumber(value, 1)
  }
];

function shortenLargeNumber(num, digits) {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}
