import { useEffect, useState } from 'react';

export const useShowFixed = () => {
    const [showFixed,setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll  = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll",onScroll);

        return () => document.removeEventListener("scroll",onScroll);

    },[showFixed]);

    return { showFixed };
};