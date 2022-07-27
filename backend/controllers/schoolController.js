const SchoolModel = require('../models/schoolModel');

exports.createSchool = async ( req, res, next ) => {
    const school = new SchoolModel(req.body);
    try{
      res.json({ status : 'success', data: school})
    }catch(err){
        res.json({ status : 'Error... ', message : err.message})
    }
}