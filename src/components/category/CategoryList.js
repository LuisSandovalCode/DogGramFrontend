import React from 'react';
import { useCategoriesData } from '../hook/useCategoryData';
import { useShowFixed } from '../hook/useShowFixed';
import Category from './Category';

const CategoryList = () => {
    const { categories, loading } = useCategoriesData();
    const { showFixed } = useShowFixed();

    const renderList = fixed => (
        <ul className={fixed ? "Lista fixed" : "Lista"}>
            {
                loading ? (
                    <li className="Item" key="loading">
                        <Category/>
                    </li>
                ) :
                (
                    categories.map(category => (
                        <li className="Item" key={category}>
                            <Category src={category} path="/"/>
                        </li>
                    ))
                )
            }
        </ul>
    )

    if(loading){
        return "Cargando...";
    }

    return(
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    )
};

export const CategoriesDog = React.memo(CategoryList);