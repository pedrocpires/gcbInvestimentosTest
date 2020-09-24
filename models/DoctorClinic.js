const { Model, DataTypes } = require('sequelize');

class DoctorClinic extends Model {
  static init(sequelize) {
    super.init(
      {
        doctors_id: DataTypes.STRING,
        clinics_id: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'doctorClinics',
        timestamps: false,
      }
    );
  }
}

module.exports = DoctorClinic;
