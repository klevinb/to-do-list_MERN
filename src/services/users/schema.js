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

UserSchema.static("findAll", async function (id) {
    const book = await UserModal.findOne({ _id: id }).populate("authors")
    return book
})

const UserModal = mongoose.model("user", UserSchema)

module.exports = UserModal