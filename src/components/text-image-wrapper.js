import React from 'react';
import Wrapper from './wrapper';
import TextBox from './text-box';
import SideBackground from './side-bg';

export default ({
  img,
  topic,
  page,
  sign,
  rightImage,
  children,
  left,
  right }) => {
  let dir = "";
  if(rightImage) {
    dir = "text-image-wrapper--image-right"
  }
  return (
      <div style={{position: 'relative'}}>
        { left && <SideBackground settings={ ['left', page, ...left] } />}
        { right && <SideBackground settings={ ['right', page, ...right] } />}
        <Wrapper>
          <div className={ `text-image-wrapper ${dir}` }>
            <div className="text-image-wrapper__image">
              <img src={ img } />
            </div>
            <div className="text-image-wrapper__text">
              { children ||
                  <TextBox page={ page } topic={ topic } sign={ sign } />}
            </div>
          </div>
        </Wrapper>
      </div>
    )
}
