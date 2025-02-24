import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Scissors } from 'lucide-react';
import './404.css';
export default function Error404() {
    return (
        <>
            <div className="error-page">
                <div className="content-wrapper">
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80')`,
                        }}
                    />

                    <div className="decorative-blob decorative-blob-top" />
                    <div className="decorative-blob decorative-blob-bottom" />

                    <div className="content-card">
                        <div className="content-inner">
                            <div className="icon-container">
                                <div className="icon-wrapper">
                                    <Shirt className="main-icon" />
                                    <Scissors className="secondary-icon" />
                                </div>
                            </div>

                            <div className="error-code">
                                <span className="error-digit">4</span>
                                <span className="error-digit-fade">0</span>
                                <span className="error-digit">4</span>
                                <div
                                    className="fabric-texture"
                                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553532434-5ab5b6b84993?auto=format&fit=crop&q=80')` }}
                                />
                            </div>

                            <div className="error-message">
                                <h2 className="error-title">Облеклото не е намерено</h2>
                                <p className="error-description">Изглежда, че тази дреха вече не е в нашата колекция. Нашите най-нови дизайни ви очакват в нашия каталог.</p>
                            </div>

                            <div className="button-container">
                                <Link to={-1} className="button button-secondary">Назад</Link>
                                <Link to="/catalog?sort=new&size=20" className="button button-primary">Разгледайте колекцията</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
