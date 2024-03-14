// DELETE THIS LINE

const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
module.exports={
selectAll :async function (req, res) {
  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (error) {
    res.status(200).send(error);
  }
},
create:async (req, res) => {
    try {
        const items = await Item.create(req.body);
        res.status(200).json(items)
        
    } catch (error) {
        res.status(400).json({ error: error.message }) 
    }
       
},
findOne: async  (req, res) => {
try {
    const items = await Item.findOne({ title: req.params.title });
    res.status(200).json(items)
    
} catch (error) {
    res.status(400).json({ error: err.message })
}

},
delete:  async (req, res) => {
    try {
        const items = await Item.deleteOne({ _id: req.params.id });
    res.status(200).json(items)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
},
update: async  (req, res) => {
    try {
        const items = await Item.findOneAndUpdate({ _id: req.params.id },req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(items)
    } catch (error) {
        
    }
   
},


}

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT

// module.exports = { selectAll };
