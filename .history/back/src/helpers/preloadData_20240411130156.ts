import { AppDataSource, userModel } from "../config/data-source";
import { appoiments } from "../entities/appoiments";
import { user } from "../entities/user";
const preloaderUser=[
    {
        id: 1,
        name: "mauro",
        email: "mauro@gmail.com",
        birthdate: "21/10/1989",
        nDni: "40404040"
        
      },

      {
        id: 2,
        name: "marina",
        email: "marina@gmail.com",
        birthdate: "1/10/1990",
        nDni: "40404040"
        
      },
      
      {
        id: 3,
        name: "cirilo",
        email: "cirilo@gmail.com",
        birthdate: "27/12/2023",
        nDni: "40404040"
        
      },
    ]
const preLoadAppointmens = [
    {
      id: 1,
      date: "2/2/2222",
      time: "12hs",
      description: "algo",
      userId: 1
    },
  
    {
      id: 2,
  
      date: "2/2/2222",
  
      time: "12hs",
  
      description: "algo",
      userId: 2
    },
  ];
  
  const appointment1 = {
    id: 1,
  
    date: "2/2/2222",
    time: "12hs",
    description: "algo",
  };
  
  const appoitnment2 = {
    id: 2,
  
    date: "2/2/2222",
  
    time: "12hs",
  
    description: "algo",
  };
  
  export const preLoadData = async () => {
    await AppDataSource.manager.transaction(
      async (transactionalEntityManager) => {
        const usersDB = await userModel.find();
        if (usersDB.length)
          return console.log("Ya existen usuarios en la base de datos");
  
        for await (const user of preloaderUser) {
          const newUser = await userModel.create(user);
          await transactionalEntityManager.save(newUser);
        }
  
        console.log("Precarga de datos realizada");
      }
    );
  };
  
  export const PreLoadCredentials = async () => {
    await AppDataSource.manager.transaction(
      async (transactionalEntityManager) => {
        for await (const appointment of preLoadAppointmens) {
          const newappointment = await AppDataSource.getRepository(appoiments).create(appointment);
          await transactionalEntityManager.save(newappointment);
          const user = await userModel.findOneBy({ id: appointment.id });
          if (user) {
              newappointment.user = user;
            transactionalEntityManager.save(newappointment);
          } else {
            throw Error('No se pudo cargar las credenciales')
          }
        }
  
        console.log("Precarga de datos de credentials realizada");
      }
    );
  };