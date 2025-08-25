import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: [
      {
        name: {
          type: String,
          default: "Rahad",
        },
        age: {
          type: Number,
          default: 11,
        },
      }
    ],
    default: [
      {
        name: "Rahad",
        age: 11,
      }
    ]
  },
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

export default User;
