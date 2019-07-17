import React from 'react';

const Home = (props) => {
    setTimeout(() => {
        props.changeCurrentId();
    }, props.duration);
    return (
        <div>
           {
               props.imageData.map((image,index) => {
                    return (
                        props.currentShowId == image.id ?
                        <img key={index} src={image.path} height="400" width="800" style={{margin:10}}  />
                        :""
                    )
               })
           }
        </div>
    );
};

export default Home;