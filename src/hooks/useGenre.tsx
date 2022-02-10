import { createContext, useContext, useState } from "react";
import { ReactNode } from 'react'

interface GenreContextData {
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
}

interface selectedGenreIdProps {
    children: ReactNode;
}

const genreContext = createContext<GenreContextData>({} as GenreContextData)

export function useGenre() {
    const context = useContext(genreContext)
    return context;
}

export function GenreIdProvider({ children }: selectedGenreIdProps) {

    const [selectedGenreId, setSelectedGenreId] = useState(1);
    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <genreContext.Provider value={{ selectedGenreId, handleClickButton }}>
            {children}
        </genreContext.Provider>
    )
}