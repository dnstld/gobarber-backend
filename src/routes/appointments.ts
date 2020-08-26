import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppontimentsRepository from '../repositories/AppointmentsRepository';
import CreateAppoitmentService from '../services/CreateAppoitmentService';
import { getCustomRepository } from 'typeorm'

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) => {
  const appointmentsRepository = getCustomRepository(AppontimentsRepository);

  const appointments = appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);
    
    const createAppointment = new CreateAppoitmentService();

    const appointment = await createAppointment.execute({ date: parsedDate, provider });

    return response.json(appointment);
  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;