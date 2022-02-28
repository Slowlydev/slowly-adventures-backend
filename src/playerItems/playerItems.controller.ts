import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PlayerItemService } from "./playerItems.service"
import { PlayerItem } from "./playerItems.entity";

@Controller("/player-items")
export class PlayerItemsController {
  constructor(private readonly playerItemService: PlayerItemService) { }

  @Get()
  async getPlayerItems(): Promise<PlayerItem[]> {
    return this.playerItemService.findAllPlayerItems()
  }

  @Get(":id")
  async getRarity(@Param("id") id: PlayerItem["id"]): Promise<PlayerItem> {
    return this.playerItemService.findOnePlayerItem(id);
  }

  @Post()
  async postRarity(@Body() request: PlayerItem): Promise<PlayerItem> {
    return this.playerItemService.createPlayerItem(request);
  }

  @Put()
  async putRarity(@Body() request: PlayerItem): Promise<PlayerItem> {
    return this.playerItemService.updatePlayerItem(request);
  }

  @Delete(":id")
  async deleteRarity(@Param("id") id: PlayerItem["id"]): Promise<PlayerItem> {
    return this.playerItemService.removeOnePlayerItem(id);
  }

  @Delete()
  async deleteRarities(): Promise<PlayerItem[]> {
    return this.playerItemService.removeAllPlayerItems();
  }
}
