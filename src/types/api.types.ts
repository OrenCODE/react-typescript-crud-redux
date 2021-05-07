export interface Log {
    id: number,
    message: string,
    attention: boolean,
    date: string,
    tech: string
}

export interface Tech {
    id: number
    firstName: string,
    lastName: string
}