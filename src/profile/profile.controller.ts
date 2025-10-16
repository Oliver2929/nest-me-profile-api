import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ProfileService } from './profile.service';

@Controller('me')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getProfile(@Res() res: Response) {
    try {
      const data = await this.profileService.getProfileData();
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
      });
    }
  }
}
