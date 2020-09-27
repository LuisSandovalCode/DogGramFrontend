import React from 'react';
import Layout from '../layout/Layout';
import PhotoCardList from '../Photo/PhotoCardList';
import { CategoriesDog } from '../category/CategoryList';
const HomePage = () => (
    <Layout title="Tu red social canina" subtitle="Comparte tu vida canina">
        <CategoriesDog/>
        <PhotoCardList/>
    </Layout>
)

export default HomePage;

