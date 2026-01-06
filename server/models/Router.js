const mongoose = require('mongoose')

const routerSchema = new mongoose.Schema({
    // 1. Core Device Information
    name: {
        type: String,
        required: [true, 'Device name is required'],
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        trim: true
    },

    // 2. Inventory Status (Business Logic)
    status: {
        type: String,
        enum: {
            values: ['active', 'maintenance', 'broken', 'warehouse'],
            message: '{VALUE} is not a valid status'
        },
        default: 'warehouse'
    },

    // 3. Financial Data
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },

    // 4. Technical Details
    ipAddress: {
        type: String,
        default: '0.0.0.0',
        trim: true
    },
    location: {
        type: String,
        default: 'Main Server Room',
        trim: true
    }
}, 
// 5. Audit Options
// Automatically adds 'createdAt' and 'updatedAt' fields
{ timestamps: true }
)

module.exports = mongoose.model('Router', routerSchema)