import { Player } from "src/player/player.entity";
import { Rarity } from "src/rarity/rarity.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("cloting")
export class Clothing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    protection: number;

    @OneToMany(() => Rarity, (rarity) => rarity.clothings)
    @JoinColumn({ name: "rarityID" })
    rarity: Rarity;

    @OneToMany(() => Player, (player) => player)
    @JoinColumn({ name: "playerIDS" })
    players: Player[];
}