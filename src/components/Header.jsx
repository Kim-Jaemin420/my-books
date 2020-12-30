import React from 'react';
import { HeaderStyle } from '../style/HeaderStyle';
import ReorderTwoToneIcon from '@material-ui/icons/ReorderTwoTone';

const Header = props => {
  return (
    <HeaderStyle>
      <ReorderTwoToneIcon
        style={{
          float: 'left',
          marginLeft: 30,
          borderBox: 'box-sizing',
          marginTop: 30,
          fontSize: 40,
          display: 'block',
          color: '#D37757',
          position: 'absolute',
        }}
      />
      {props.children}
    </HeaderStyle>
  );
};

export default Header;