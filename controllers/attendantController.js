const Attendant = require ("../models/Attendant");
const createAttendant = async (req, res) => {
    try {
        const attendant = new Attendant(req.body);
        await attendant.save();
        res.status(201).json(attendant);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllAttendants = async (req, res) => {
    try {
        const attendants = await Attendant.find();
        res.status(200).json(attendants);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

module.exports = {
    createAttendant,
    getAllAttendants
};
