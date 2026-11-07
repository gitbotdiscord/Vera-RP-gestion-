const fs = require('fs');
const path = './data/welcome.json';

function load() {
  if (!fs.existsSync(path)) return {};
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function save(data) {
  fs.mkdirSync('./data', { recursive: true });
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = {
  get: (guildId) => load()[guildId] ?? {},
  set: (guildId, key, value) => {
    const data = load();
    data[guildId] = { ...(data[guildId] ?? {}), [key]: value };
    save(data);
  },
};
