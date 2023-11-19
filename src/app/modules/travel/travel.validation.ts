import { z } from 'zod';

const createTravelZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),

    dates: z.string({
      required_error: 'dates is required',
    }),
    destinations: z.string({
      required_error: 'destinations is required',
    }),
    activities: z.string({
      required_error: 'activities is required',
    }),
    transportationDetails: z.string({
      required_error: 'transportationDetails is required',
    }),
    accommodationDetails: z.string({
      required_error: 'accommodationDetails is required',
    }),
  }),
});

export const TravelValidation = {
  createTravelZodSchema,
};
