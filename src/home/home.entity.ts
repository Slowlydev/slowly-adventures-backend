import { Player } from "src/player/player.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("home")
export class Home {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    stroage: number;

    @Column()
    price: number;

    @ManyToMany(() => Player, (player) => player.homes)
    @JoinTable({ name: "playersHomes" })
    players: Player[];
}