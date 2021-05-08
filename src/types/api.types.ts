export interface Log {
    id?: number,
    message: string,
    attention: boolean,
    date: Date,
    tech: string
}

export interface Tech {
    id?: number
    firstName: string,
    lastName: string
}