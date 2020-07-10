const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        todolist: [{ type: Schema.Types.ObjectId, ref: "Meeting" }]
    }
)

UserSchema.static("addToDoListOnUser", async function (id, todoId) {
    await UserModal.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $addToSet: { todolist: todoId }
        }
    )
})

const UserModal = mongoose.model("user", UserSchema)

module.exports = UserModal