const Landlord = require('../models/Landlord');

exports.getAllLandlords = async (req, res) => {
  try {
    const landlords = await Landlord.find().populate('reviews');
    res.json(landlords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLandlordById = async (req, res) => {
  try {
    const landlord = await Landlord.findById(req.params.id).populate('reviews');
    if (!landlord) {
      return res.status(404).json({ message: 'Landlord not found' });
    }
    res.json(landlord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createLandlord = async (req, res) => {
  const landlord = new Landlord({
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const newLandlord = await landlord.save();
    res.status(201).json(newLandlord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateLandlord = async (req, res) => {
  try {
    const landlord = await Landlord.findById(req.params.id);
    if (!landlord) {
      return res.status(404).json({ message: 'Landlord not found' });
    }

    landlord.name = req.body.name || landlord.name;
    landlord.address = req.body.address || landlord.address;

    const updatedLandlord = await landlord.save();
    res.json(updatedLandlord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteLandlord = async (req, res) => {
  try {
    const landlord = await Landlord.findById(req.params.id);
    if (!landlord) {
      return res.status(404).json({ message: 'Landlord not found' });
    }

    await landlord.remove();
    res.json({ message: 'Landlord deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
