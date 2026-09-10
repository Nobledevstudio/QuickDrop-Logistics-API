import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

import { db } from "./db.js";

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  readonly db = db;

  async onModuleInit(): Promise<void> {
    await this.db.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.db.close();
  }
}