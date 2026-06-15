import { useState, useEffect } from "react";
import type { Character } from "./types";

const useCharacters = (search: string) => {
    const [characters, setCharacter] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        let url = 'https://rickandmortyapi.com/api/character';

        if (search) {
            url = `https://rickandmortyapi.com/api/character?name=${search}`;
        }

        fetch(url)
        .then((res) =>{
            if(!res.ok) throw new Error ('Character is not found');
            return res.json();
        })
        .then((data) =>{
            setCharacter(data.results);
            setLoading(false);
        })
        .catch((err) =>{
            setError(err.message);
            setLoading(false);
        });
    }, [search]);

    return {characters, loading ,error};

};


export default useCharacters;