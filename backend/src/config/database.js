module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'kylyfullstack',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
