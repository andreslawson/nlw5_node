import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email:string){
//    const usersRepository = getCustomRepository(UsersRepository);
    //Checks if the user exists

    const userExists = await this.usersRepository.findOne({
      email,
    });

    // If exists, return user
    if(userExists){
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    // If it does not exist, it will be saved in the database.
    return user;

  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({email});

    return user;
  }

}

export { UsersService };
