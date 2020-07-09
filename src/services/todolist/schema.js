const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ToDoList = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        userId: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }]
    }
)

const ToDoListModel = mongoose.model("Meeting", ToDoList)

module.exports = ToDoListModel