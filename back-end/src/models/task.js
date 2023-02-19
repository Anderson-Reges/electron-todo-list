module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    task_name: DataTypes.STRING,
    short_description: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'tasks',
    }
  );

  return task;
};