const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://thesujalogy:thesujalogy@atlascluster.ezemj2a.mongodb.net/?retryWrites=true&w=majority");
module.export = {
    connect
}