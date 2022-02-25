import React from 'react';

import { Button as ButtonAnt } from 'antd';

interface ButtonProps {
  style: string;
}

const Button = ({ style }: ButtonProps): JSX.Element => (
  <>
    <div
      className="w-100 h-20 bg-red-500 text-red-500"
      // style={{ width: '200px', height: '200px', backgroundColor: 'red' }}
    >
      <ButtonAnt>test</ButtonAnt>
    </div>
  </>
);

export default Button;
export type { ButtonProps };
