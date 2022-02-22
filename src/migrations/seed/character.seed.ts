type Charcter = {
    name: string;
    speed: number;
    strength: number;
    stamina: number;
    abilityID: number;
}

export const characters: Charcter[] = [
    {
        name: "Link",
        speed: 100,
        strength: 100,
        stamina: 100,
        abilityID: 2,
    },
    {
        name: "Mario",
        speed: 80,
        strength: 80,
        stamina: 120,
        abilityID: 1,
    }
]