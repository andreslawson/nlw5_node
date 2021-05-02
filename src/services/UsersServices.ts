import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email:string){
    const usersRepository = getCustomRepository(UsersRepository);
    //Checks if the user exists

    const userExists = await usersRepository.findOne({
      email,
    });

    // If exists, return user
    if(userExists){
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    // If it does not exist, it will be saved in the database.
    return user;

  }

}

export { UsersService };
