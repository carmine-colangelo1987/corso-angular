interface HeroPowerStats {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
}

interface HeroBiography {
    "full-name": string,
    "alter-egos": string,
    aliases: string[],
    "place-of-birth": string,
    "first-appearance": string,
    publisher: string,
    alignment: string
}

type Inches = string
type Centimetres = string
type Libres = string
type Kilograms = string
interface HeroAppearance  {
    gender: string,
    race: string,
    height: [ Inches, Centimetres ],
    weight: [ Libres, Kilograms ],
    "eye-color": string
    "hair-color": string
}

interface HeroWork {
    occupation: string,
    base: string
}

interface HeroConnections {
    "group-affiliation": string
    relatives: string
}

interface HeroImage {
    url: string
}

interface HeroDetail {
    response: string
    id: string
    name: string
    powerstats: HeroPowerStats
    biography: HeroBiography
    appearance: HeroAppearance
    work: HeroWork
    connections: HeroConnections
    image: HeroImage
}

export default HeroDetail