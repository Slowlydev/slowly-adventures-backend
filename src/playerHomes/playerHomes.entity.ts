import { Home } from "src/home/home.entity";
import { Player } from "src/player/player.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("playerHome")
export class PlayerHome {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, (player) => player.playerHomes)
  @JoinColumn({ name: "playerID" })
  player: Player;

  @ManyToOne(() => Home, (home) => home.playerHomes)
  @JoinColumn({ name: "homeID" })
  home: Home;
}