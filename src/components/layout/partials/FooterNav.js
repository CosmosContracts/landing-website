import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a href="https://github.com/CosmosContracts/Juno/wiki" target="_blank" rel="noopener noreferrer">Documentation</a>
        </li>
        <li>
          <a href="https://discord.gg/wHdzjS5vXx" target="_blank" rel="noopener noreferrer">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;