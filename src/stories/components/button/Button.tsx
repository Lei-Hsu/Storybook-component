import React from 'react';

import { Button as ButtonAnt } from 'antd';
import Image from 'next/image';

// eslint-disable-next-line import/no-extraneous-dependencies
import style from './button.module.scss';

interface ButtonProps {
  /**
   * use to custom btn different w&h
   */
  btnWidth?: string;
  btnHeight?: string;
  buttonCustomClassName?: string;
  customClassName?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  /**
   * button text
   */
  text?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  /**
   * button style
   */
  btnStyle?: 'fill' | 'outline' | 'icon';
  iconSrc?: string;
  /**
   * is button disabled or not
   */
  disabled?: boolean;
  /**
   * Click event
   */
  onClick?: (e) => void;
  buttonType?: 'normal' | 'filter' | 'both';
  leftBtnClick?: (e) => void;
  rightBtnClick?: (e) => void;
}

const Button = ({
  type = 'button',
  text = 'button',
  disabled = false,
  btnStyle = 'fill',
  btnWidth = '100%',
  btnHeight = '40px',
  buttonCustomClassName = '',
  customClassName,
  iconSrc = `${process.env.BASE_PATH}/icon/share.svg`,
  onClick,
  buttonType,
  leftBtnText,
  rightBtnText,
  rightBtnClick,
  leftBtnClick,
  ...props
}: ButtonProps): JSX.Element => (
  <>
    <div style={{ width: `${btnWidth}`, height: `${btnHeight}` }} className={customClassName}>
      <ButtonAnt
        disabled={disabled}
        className={`${style['button--root']} ${style[`button--${btnStyle}`]} ${
          disabled && style['button--disabled']
        } ${buttonCustomClassName || ''}`}
        {...props}
        onClick={onClick}
      >
        <div className="flex items-center justify-center">
          {btnStyle === 'icon' && (
            <div className="mr-2 flex-shrink-0">
              <Image src={iconSrc} width={12} height={12} />
            </div>
          )}
          <>{text}</>
        </div>
      </ButtonAnt>
    </div>
  </>
);

export default Button;
export type { ButtonProps };
