import React from 'react';

interface IProps{
    width?: number;
    height?: number;
    fill?: string
}

const Error: React.FC<IProps> = ({fill = 'rgba(255, 0, 0, 0.637)', height = 40, width = 40}) => {
  return (
    <div>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="exclamation-octagon">
        <path
          fill={fill}
          d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm9.71-7.44L16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.56A1.05,1.05,0,0,0,2,8.27v7.46a1.05,1.05,0,0,0,.29.71l5.27,5.27a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.27a1.05,1.05,0,0,0,.29-.71V8.27A1.05,1.05,0,0,0,21.71,7.56ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z"></path>
      </svg>
    </div>
  );
};

export default Error;