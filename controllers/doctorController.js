const { Op } = require('sequelize');

const Doctor = require('../models/Doctor');
const Clinic = require('../models/Clinic');
const DoctorClinics = require('../models/DoctorClinic');

module.exports = {
  index(req, res) {
    res.render('index', {
      title: 'Home • GCB Investimentos',
    });
  },
  async create(req, res) {
    const options = await Clinic.findAll();
    res.render('register', {
      title: 'Registrar • GCB Investimentos',
      options: options,
    });
  },
  async store(req, res) {
    const { name, crm, phone, state, city, options } = req.body;

    const newDoctor = await Doctor.create({ name, crm, phone, state, city });

    options.forEach(async (option_id) => {
      await newDoctor.addClinic(
        await Clinic.findOne({ where: { id: option_id } })
      );
    });

    return res.redirect('/list');
  },
  async show(req, res) {
    const doctors = await Doctor.findAll({
      include: { association: 'clinics', through: { attributes: [] } },
    });

    res.render('list', {
      title: 'Cadastrados • GCB Investimentos',
      doctors: doctors,
    });
  },
  async delete(req, res) {
    const { id } = req.params;
    await Doctor.destroy({ where: { id } });
    res.redirect('/list');
  },

  async edit(req, res) {
    const { id } = req.params;
    const doctor = await Doctor.findByPk(id, {});
    const clinics = await DoctorClinics.findAll({
      where: { doctors_id: id },
      attributes: ['clinics_id'],
    });
    const options = await Clinic.findAll();
    let clin_id = [];
    clinics.forEach((clinic) => {
      clin_id.push(Object.values(clinic.dataValues)[0]);
    });
    res.render('edit', {
      title: 'Editar • GCB Investimentos',
      doctor: doctor,
      clinics: clin_id,
      options: options,
    });
  },
  async update(req, res) {
    const { id, name, crm, phone, state, city, options } = req.body;

    const upDoctor = await Doctor.update(
      { name, crm, phone, state, city },
      { where: { id } }
    );

    const doctor = await Doctor.findByPk(id);
    options.forEach(async (option_id) => {
      await doctor.addClinic(
        await Clinic.findOne({ where: { id: option_id } })
      );
    });

    return res.redirect('/list');
  },
  async search(req, res) {
    res.render('search', {
      title: 'Buscar • GCB Investimentos',
    });
  },
  async find(req, res) {
    const { search } = req.body;
    const doctors = await Doctor.findAll({
      where: {
        name: {
          [Op.substring]: search,
        },
      },
      include: {
        association: 'clinics',
        through: {
          attributes: [],
        },
      },
    });
    res.render('search', {
      title: 'Buscar • GCB Investimentos',
      doctors: doctors,
    });
  },
};
