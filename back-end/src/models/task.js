module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    taskName: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'tasks',
      underscored: true,
    }
  );

  return task;
};