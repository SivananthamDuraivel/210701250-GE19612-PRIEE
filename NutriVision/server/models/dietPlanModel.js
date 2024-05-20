const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dpSchema = new Schema({
    username:{type:String,required:true},
    mbreakfast: { type: String, required: true },
    mlunch: { type: String, required: true },
    mdinner: { type: String, required: true },
    msnacks: { type: String, required: true },
    tbreakfast: { type: String, required: true },
    tlunch: { type: String, required: true },
    tdinner: { type: String, required: true },
    tsnacks: { type: String, required: true },
    wbreakfast: { type: String, required: true },
    wlunch: { type: String, required: true },
    wdinner: { type: String, required: true },
    wsnacks: { type: String, required: true },
    thbreakfast: { type: String, required: true },
    thlunch: { type: String, required: true },
    thdinner: { type: String, required: true },
    thsnacks: { type: String, required: true },
    fbreakfast: { type: String, required: true },
    flunch: { type: String, required: true },
    fdinner: { type: String, required: true },
    fsnacks: { type: String, required: true },
    sbreakfast: { type: String, required: true },
    slunch: { type: String, required: true },
    sdinner: { type: String, required: true },
    ssnacks: { type: String, required: true },
    subreakfast: { type: String, required: true },
    sulunch: { type: String, required: true },
    sudinner: { type: String, required: true },
    susnacks: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('dietPlanModel', dpSchema);
