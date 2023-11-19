import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ITravel } from './travel.interface';
import { TravelService } from './travel.service';

const createTravel = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await TravelService.createTravel(data);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Travel created successfully!',
    data: result,
  });
});

const getAllTravels = catchAsync(async (req: Request, res: Response) => {
  const allTravels = await TravelService.getAllTravels();

  if (!allTravels) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Travels');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Travels fetched successfully !',
    data: allTravels,
  });
});

const getSingleTravel = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const singleTravel = await TravelService.getSingleTravel(id);

  if (!singleTravel) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Travel');
  }

  sendResponse<ITravel>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Travel fetched successfully !',
    data: singleTravel,
  });
});

const updateTravel = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedTravel = await TravelService.updateTravel(id, updatedData);

  if (!updatedTravel) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to Update Travel');
  }

  sendResponse<ITravel>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Travel updated successfully !',
    data: updatedTravel,
  });
});

const deleteTravel = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedTravel = await TravelService.deleteTravel(id);

  if (!deletedTravel) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to delete Travel');
  }

  sendResponse<ITravel>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Travel deleted successfully !',
    data: deletedTravel,
  });
});

export const TravelController = {
  createTravel,
  getAllTravels,
  getSingleTravel,
  updateTravel,
  deleteTravel,
};
