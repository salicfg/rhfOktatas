import { FC } from 'react';

import { OwnButtonType } from './types.ts';
import classes from './OwnButton.module.css'
const OwnButton: FC<OwnButtonType> = (props) => {
  return <button className={classes.ownButton} {...props}></button>;
};

export default OwnButton;
