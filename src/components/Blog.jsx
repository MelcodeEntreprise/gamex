import React from 'react';
import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';
import blog3 from '../assets/img/blog3.jpg';
import blog4 from '../assets/img/blog4.jpg';
import author1 from '../assets/img/play1.jpg';
import author2 from '../assets/img/play2.jpg';
import author3 from '../assets/img/play3.jpg';
import author4 from '../assets/img/play4.jpg';

function Blog() {
  return (
    <div className="blog__display">
        <div className="blog__title">
            <h3>Voir toutes les news</h3>
            <h1>Qu'elles sont les news?</h1>
        </div>
        <div className="blog__section">
            <div className="blog__card">
                <div className="img__card">
                    <img src={blog1} alt="" />
                    <div className="blog__tag">
                        <h3>E-sport</h3>
                    </div>
                </div>
                <div className="blog__body">
                    <p>15 juin 2022</p>
                    <h1>Match du week-end #FDS - Craxs vs kinz66</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos cupiditate, fugit, quis consectetur eius assumenda alias laborum</p>
                    <div className="link__global">
                        <a href="#">continuez lecture</a>
                    </div>
                    <div className="blog__footer">
                        <div className="blog__author">
                            <img src={author1} alt="" />
                        </div>
                        <p>John Doe</p>
                    </div>
                </div>
            </div>

            <div className="blog__card">
                <div className="img__card">
                    <img src={blog2} alt="" />
                    <div className="blog__tag">
                        <h3>Battle</h3>
                    </div>
                </div>
                <div className="blog__body">
                    <p>15 juin 2022</p>
                    <h1>Warzone - Mode Furie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos cupiditate, fugit, quis consectetur eius assumenda alias laborum unde nisi provident quos, corrupti debitis dolores? Eveniet consequatur distinctio vero laudantium?</p>
                    <div className="link__global">
                        <a href="#">continuez lecture</a>
                    </div>
                    <div className="blog__footer">
                        <div className="blog__author">
                            <img src={author2} alt="" />
                        </div>
                        <p>Jeanne Doe</p>
                    </div>
                </div>
            </div>
            <div className="blog__card">
                <div className="img__card">
                    <img src={blog3} alt="" />
                    <div className="blog__tag">
                        <h3>Guide</h3>
                    </div>
                </div>
                <div className="blog__body">
                    <p>15 juin 2022</p>
                    <h1>Tour imprenable</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos cupiditate, fugit, quis consectetur eius assumenda alias laborum unde nisi provident quos, corrupti debitis dolores? Eveniet consequatur distinctio vero laudantium?</p>
                    <div className="link__global">
                        <a href="#">continuez lecture</a>
                    </div>
                    <div className="blog__footer">
                        <div className="blog__author">
                            <img src={author3} alt="" />
                        </div>
                        <p>Aziz Doe</p>
                    </div>
                </div>
            </div>

            <div className="blog__card">
                <div className="img__card">
                    <img src={blog4} alt="" />
                    <div className="blog__tag">
                        <h3>Replay</h3>
                    </div>
                </div>
                <div className="blog__body">
                    <p>15 juin 2022</p>
                    <h1>Course #6 - Revivez l'instant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos cupiditate, fugit, quis consectetur eius assumenda alias laborum unde nisi provident quos, corrupti debitis dolores? Eveniet consequatur distinctio vero laudantium?</p>
                    <div className="link__global">
                        <a href="#">continuez lecture</a>
                    </div>
                    <div className="blog__footer">
                        <div className="blog__author">
                            <img src={author4} alt="" />
                        </div>
                        <p>John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog