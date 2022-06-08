import React from 'react';
import {useGetNewsQuery} from "../../api/newsApi";

const News = () => {
    const {data, isLoading} = useGetNewsQuery()

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    return (
        <div>
            {data.items.map(el => (
                <Post key={el.id} title={el.title} desc={el.description} photoUrl={el.photoUrl}/>
            ))}
        </div>
    );
};

const Post = ({title, desc, photoUrl}) => {

    return (
        <div className='post'>
            <img className='post__img' src={'https://fakenews-kirboy.herokuapp.com/' + photoUrl} alt={title}/>
            <h2 className='post__title'>{title}</h2>
            <p className='post__desc'>{desc}</p>
        </div>
    );
};

export default News;