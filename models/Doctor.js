const { Model, DataTypes } = require('sequelize');

class Doctor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        crm: DataTypes.STRING,
        phone: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Clinic, {
      foreignKey: 'doctors_id',
      through: models.DoctorClinic,
      as: 'clinics',
    });
  }
}

module.exports = Doctor;
