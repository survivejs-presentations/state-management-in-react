import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class CatCounter extends React.Component {
  ...
}

// Alternative. Works with stateless functions too
//export default observer(CatCounter);
