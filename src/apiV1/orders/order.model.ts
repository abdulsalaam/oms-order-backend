import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const SchemaTypes = mongoose.Schema.Types;

const OrderSchema = Schema(
  {
    productId: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true
    },
    tax: {
      type: Number
    },
    total: {
      type: Number
    },
    paymentStatus: {
      type: String,
      enum : ['pending', 'success', 'failed'],
      default: 'pending'
    },
    state : {
        type : String,
        enum : ['created', 'confirmed', 'delivered', 'cancelled'],
        default: 'created'
    },
    status: {
      type: String,
      default : 'new'
    },
    authPin: {
      type: Number,
      default : 123456789
    },
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model("Order", OrderSchema);
