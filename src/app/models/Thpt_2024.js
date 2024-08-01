const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Thpt_2024 = new Schema({
    sbd: { type: Number },
    toan: { type: Number },
    ngu_van: { type: Number },
    ngoai_ngu: { type: Number },
    vat_li: { type: Number },
    hoa_hoc: { type: Number },
    sinh_hoc: { type: Number },
    lich_su: { type: Number },
    dia_ly: { type: Number },
    gdcd: { type: Number },
    ma_ngoai_ngu: { type: String },
});

module.exports = mongoose.model("Thpt_2024", Thpt_2024);
