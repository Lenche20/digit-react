import React from 'react';
import './CardTemplate.css';

const CardTemplate = () => {
    return (
        <>
            <div className="card-columns">
                <div className="card border-0">
                    <div className="position-relative">
                        {/* Any content or elements you want here */}
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <a className="card-link text-primary read-more" href="javascript://">
                                Read More
                            </a>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <hr />
                        <p className="card-text">
                            Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod
                            proiden.
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="media align-items-center">
                            <div className="media-body">
                                <a className="card-link text-uppercase" href="javascript://">
                                    Read More
                                </a>
                            </div>
                            <div className="footerright">
                                <div className="tnlink3">
                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <div className="tnlink3">
                                    <i className="fas fa-share-nodes" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* More card elements can be added here */}
            </div>
        </>
    );
};

export default CardTemplate;
