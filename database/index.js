const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const Clinic = require('../models/Clinic');
const DoctorClinic = require('../models/DoctorClinic');

const db = new Sequelize(dbConfig);

Clinic.init(db);
Doctor.init(db);
DoctorClinic.init(db);

Clinic.associate(db.models);
Doctor.associate(db.models);

module.exports = db;
