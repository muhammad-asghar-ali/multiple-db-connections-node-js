import mongoose from "mongoose"
import { userConnection, todoConnection } from './db.js'

const userSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
}, {
    versionKey: false,
    timestamps: true,
});

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, {
    versionKey: false,
    timestamps: true,
});

export const userModel = userConnection.model('User', userSchema);
export const todoModel = todoConnection.model('Todo', todoSchema);