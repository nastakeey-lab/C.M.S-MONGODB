
const Customer = require("../models/Customer");

exports.createCustomer = async(req,res)=>{
  res.json(await Customer.create(req.body));
};
exports.getCustomers = async(req,res)=>{
  res.json(await Customer.find());
};
