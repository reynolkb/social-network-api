const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);


// export the User model
module.exports = {Thought} ;

// const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema(
//   {
//     thoughtText: {
//       type: String,
//       required: 'You need to leave a thought!',
//       minlength: 1,
//       maxlength: 280
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: timestamp => dateFormat(timestamp)
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     reactions: [reactionSchema]
//   },
//   {
//     toJSON: {
//       getters: true
//     },
//     id: false
//   }
// );

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// const Thought = model('Thought', thoughtSchema);

// module.exports = Thought;