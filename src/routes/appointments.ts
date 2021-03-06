import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppontimentsRepository from '../repositories/AppointmentsRepository';
import CreateAppoitmentService from '../services/CreateAppoitmentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppontimentsRepository);

  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);
  
  const createAppointment = new CreateAppoitmentService();

  const appointment = await createAppointment.execute({ date: parsedDate, provider_id });

  return response.json(appointment);
});

export default appointmentsRouter;