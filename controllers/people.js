const peoples = require('../model/peoples');

exports.index = async (req, res, next) => {
    try
    {   
        const people = await peoples.find();
        res.status(200).json(people);
    }
    catch (error) 
    {
        next(error);
    }
};

// exports.show = async (req, res, next) => {
//     const people = await peoples.findById(req.params.id);
//     res.status(200).json(people);
// };