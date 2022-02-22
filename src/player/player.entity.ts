import { Character } from "src/character/character.entity";
import { Clothing } from "src/clothing/clothing.entity";
import { Home } from "src/home/home.entity";
import { PlayerItem } from "src/playerItems/playerItems.entity";
import { Weapon } from "src/weapon/weapon.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("player")
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    // @ManyToOne(() => Character, (character) => character.players)
    // @JoinColumn({ name: "characterID" })
    // character: Character;

    @ManyToOne(() => Weapon, (weapon) => weapon.players)
    @JoinColumn({ name: "weaponID" })
    weapon: Weapon;

    @ManyToOne(() => Clothing, (clothing) => clothing.players)
    @JoinColumn({ name: "clothingID" })
    clothing: Clothing;

    @ManyToMany(() => Home, (home) => home.players)
    @JoinTable({ name: "playersHomes" })
    homes: Home[];

    @OneToMany(() => PlayerItem, (playerItem) => playerItem.player)
    @JoinColumn({ name: "playerItemIDS" })
    playerItems: PlayerItem[];
}