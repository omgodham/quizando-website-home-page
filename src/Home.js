import "./Home.css";
import React from 'react'

function Home() {
    return (
        <div className="home">
        <div className="home__content">
            <div className="home__top">
            <div className="home__top__img">
            <img className="home__img" src="https://www.quizando.com/assets/banners/survivor_fg.png" />
            </div>
            <div className="home__top__text">
            <h2>Play our classic quizzes, anywhere, anytime & fight your way to the top of the leaderboard</h2>
            <p>These games are live, interactive, fun... and there’s money to be won!</p>
            <button className="home__top__btn">
            Click here
            </button>
            </div>
            </div>
            <div className="home__bottom">
            <h1>Total money won on Quizando</h1>
                <div className="money__won">
                    <img className="money__img" src="https://www.quizando.com/assets/money_won.png" />
                    <h2>€149,788.94</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
