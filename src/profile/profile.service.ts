import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProfileService {
  private readonly logger = new Logger(ProfileService.name);
  private readonly catFactUrl: string;
  private readonly timeout: number;
  private readonly userEmail: string;
  private readonly userName: string;
  private readonly userStack: string;

  constructor() {
    if (!process.env.CAT_FACT_API) {
      throw new Error('CAT_FACT_API is not defined in environment variables.');
    }
    this.catFactUrl = process.env.CAT_FACT_API;
    this.timeout = parseInt(process.env.CAT_FACT_TIMEOUT || '3000');

    if (
      !process.env.USER_EMAIL ||
      !process.env.USER_NAME ||
      !process.env.USER_STACK
    ) {
      throw new Error('User profile environment variables are missing.');
    }
    this.userEmail = process.env.USER_EMAIL;
    this.userName = process.env.USER_NAME;
    this.userStack = process.env.USER_STACK;
  }

  async getProfileData() {
    let catFact = 'Unable to fetch cat fact at this time.';

    try {
      const response = await axios.get(this.catFactUrl, {
        timeout: this.timeout,
      });
      if (response.data?.fact) {
        catFact = response.data.fact;
      }
    } catch (error) {
      this.logger.warn(`Cat Fact API error: ${error.message}`);
    }

    return {
      status: 'success',
      user: {
        email: this.userEmail,
        name: this.userName,
        stack: this.userStack,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };
  }
}
