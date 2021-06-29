const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/event_users";

const connect = () => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === "test") {
      const Mockgoose = require("mockgoose").Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage().then(() => {
        mongoose
          .connect(DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
          })
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          });
      });
    } else {
      mongoose
        .connect(DB_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })
        .then((res, err) => {
          if (err) return reject(err);
          resolve();
        });
    }
  });
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = { connect, close };
