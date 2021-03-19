import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a className="button button button-wide-mobile button-sm" href="https://twitter.com/JunoNetwork" target="_blank" rel="noopener noreferrer">Twitter</a>  
        </li>
        <li>
        <a className="button button-primary button-wide-mobile button-sm" href="https://t.me/JunoNetwork" target="_blank" rel="noopener noreferrer">Telegram</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;