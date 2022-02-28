type Clothing = {
    name: string;
    description: string,
    protection: number,
    rarityID: number;
}

export const clothings: Clothing[] = [
    {
        name: "Armour",
        description: "very basic armour wont protect u at all",
        protection: 10,
        rarityID: 1,
    },
    {
        name: "Robe",
        description: "Ware at all times because it looks good",
        protection: 50,
        rarityID: 3,
    },
    {
        name: "Legendary Garment",
        description: "its worn by the legendary hearo",
        protection: 100,
        rarityID: 5,
    },
]
