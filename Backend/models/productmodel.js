import mongoose from "mongoose";

const reviewSchema = mongoose.Schema ({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    review: [reviewSchema],
    rating: {
       type: Number,
       required: true,
       default: 0,
    },
    numReview: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInstock: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});

const product = mongoose.model("Product", productSchema);

export default product;