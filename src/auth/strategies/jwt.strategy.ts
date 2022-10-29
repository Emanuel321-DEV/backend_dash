
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'Wuxa072Wnw9P3kHDrkthEmPMXZfH9ek6TPwZjjfcpM4=',
        })
    }

    async validate(payload: any){
        return { id: payload.sub, email: payload.email}

    }
}