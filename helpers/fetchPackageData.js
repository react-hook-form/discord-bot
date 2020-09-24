const Axios = require('axios');

module.exports = async () => {
  try {
    const githubPromise = Axios.get('https://api.github.com/repos/react-hook-form/react-hook-form');
    const npmPromise = Axios.get('https://api.npms.io/v2/package/react-hook-form');
    const [githubResponse, npmResponse] = await Axios.all([githubPromise, npmPromise]);
    const { open_issues_count, forks, stargazers_count, size, subscribers_count } = githubResponse.data;
    const { collected, evaluation } = npmResponse.data;
    const { version } = collected.metadata;
    const { coverage } = collected.source;
    const { downloadsCount } = evaluation.popularity;

    return {
      size,
      forks,
      version,
      coverage,
      stars: stargazers_count,
      downloads: downloadsCount,
      openIssues: open_issues_count,
      watchsCount: subscribers_count
    };
  } catch (error) {
    return {
      size: 'N/A',
      forks: 'N/A',
      version: 'N/A',
      coverage: 'N/A',
      stars: 'N/A',
      downloads: 'N/A',
      openIssues: 'N/A',
      watchsCount: 'N/A'
    };
  }
};
