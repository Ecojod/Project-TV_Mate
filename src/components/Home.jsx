import React, { useEffect, useState } from 'react'
import './Home.css'
import ShoWitems from './ShoWitems'
function Home() {

    const [articles, setArticles] = useState([]);
    const updateArticle = async () => {
        let url = 'https://api.tvmaze.com/search/shows?q=all';
        let data = await fetch(url);
        let pareseData = await data.json();
        setArticles(pareseData);
    }
    useEffect(() => {
     updateArticle();
    }, [])
    

    return (
        <>
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div key={element.show.id} className="col-md-4">
                            <ShoWitems summary={element.show.url} showName={element.show.name} imgUrl={element.show.image.medium} language={element.show.language} brief={`${element.show.genres}`} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Home