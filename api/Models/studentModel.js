import mongoose from 'mongoose';

const studentProfileSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  },
  username: {
    type: String,
    match: /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/
  },

  about: { type: String },
  address: { type: String },
  skills: [String],
  profilePicture: { type: String },
  curriculumVitae: { type: String },

  socialNetworkLinks: {
    facebook: { type: String },
    github: { type: String },
    linkedin: { type: String }
  },
  employment: {
    current: { type: String },
    openForOpportunities: { type: Boolean }
  },
  education: {
    university: { type: String },
    department: { type: String },
    graduationYear: { type: Number }
  },
  experience: [
    {
      company: { type: String },
      position: { type: String },
      startDate: { type: Number },
      endDate: { type: Number },
      description: { type: String }
    }
  ],
  recommendations: [
    {
      received: [
        {
          by: { type: String },
          content: { type: String }
        }
      ],
      given: [
        {
          to: { type: String },
          content: { type: String }
        }
      ]
    }
  ],
  publications: [
    {
      name: { type: String },
      startDate: { type: Number },
      endDate: { type: Number },
      description: { type: String }
    }
  ]
});

const Student = mongoose.model('student', studentProfileSchema);
export default Student;
