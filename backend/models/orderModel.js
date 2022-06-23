const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        quntity: {
          type: Number,
          requied: true,
        },
        image: {
          type: String,
          requied: true,
        },
        price: {
          type: Number,
          required: true,
        },
        Product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippinAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        requied: true,
      },
      country: {
        type: String,
        requied: true,
      },
      phone: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        requied: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: Boolean },
      update_time: { type: String },
      email: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      defualt: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: String,
      requied: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDeliverd: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliverAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema)
module.exports = Order;