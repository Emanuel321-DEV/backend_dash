import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/models/user.entity';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,

    ) {}

  async login(user){
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload)
    }

  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;
    try {
      user = await this.userService.findOneByEmail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
