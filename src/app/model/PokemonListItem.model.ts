export interface PokemonListItem {
    name: string,
    url: string
}

export interface PokemonList {
    count: number
    next: string | null
    previous: string | null
    results: PokemonListItem[]
}