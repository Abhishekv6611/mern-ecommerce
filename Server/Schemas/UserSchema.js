const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min:6,
    max:30,
    unique: true,
  },
  password:
   {
     type: String,
     min:8,
      required: true
     },
});

UserSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const UserData= mongoose.model('Users',UserSchema)

module.exports=UserData
