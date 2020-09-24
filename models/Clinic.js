const { Model, DataTypes } = require('sequelize');

class Clinic extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Doctor, {
      foreignKey: 'clinics_id',
      through: models.DoctorClinic,
      as: 'doctors',
    });
  }
}

module.exports = Clinic;
