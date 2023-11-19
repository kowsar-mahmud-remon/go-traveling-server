import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITravel } from './travel.interface';
import { Travel } from './travel.model';

const createTravel = async (data: ITravel) => {
  const createTravel = await Travel.create(data);

  if (!createTravel) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Travel');
  }

  return createTravel;
};

const getAllTravels = async () => {
  const result = await Travel.find({});
  return result;
};

const getSingleTravel = async (id: string) => {
  const result = await Travel.findOne({ _id: id });
  return result;
};

const updateTravel = async (id: string, payload: Partial<ITravel>) => {
  const isExist = await Travel.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Travel not found !');
  }

  const result = await Travel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteTravel = async (id: string) => {
  const isExist = await Travel.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Travel not found !');
  }

  const deletedTravel = await Travel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );

  return deletedTravel;
};

export const TravelService = {
  createTravel,
  getAllTravels,
  getSingleTravel,
  updateTravel,
  deleteTravel,
};
