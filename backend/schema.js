const mongoose = require('mongoose'); 
mongoose.connect("mongodb://127.0.0.1:27017/magesxxDB"); 



const mageSchema = new mongoose.Schema({ 
	name: { 
		type: String, 
		require: true
	}, 
	power_type: { 
		type: String, 
		require: true
	}, 
	mana_power: Number, 
	health: Number, 
	gold: Number 
}) 

const Mage = new mongoose.model("Mage", mageSchema) 

const mage_1 = new Mage({ 
	name: "Takashi", 
	power_type: 'Element', 
	mana_power: 200, 
	health: 1000, 
	gold: 10000 
}); 

mage_1.save();
