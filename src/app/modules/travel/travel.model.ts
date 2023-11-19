import { Model, Schema, model } from 'mongoose';
import { ITravel } from './travel.interface';

type TravelModel = Model<ITravel, Record<string, unknown>>;

const TravelSchema = new Schema<ITravel>(
  {
    name: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    destinations: {
      type: String,
      required: true,
    },
    activities: {
      type: String,
      required: true,
    },
    transportationDetails: {
      type: String,
      required: true,
    },
    accommodationDetails: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Travel = model<ITravel, TravelModel>('Travel', TravelSchema);
