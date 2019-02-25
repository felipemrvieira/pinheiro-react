import React, { Component } from 'react';

import BannerPrincipal from './BannerPrincipal';
import OrgaosDefesa from './OrgaosDefesa';

class Main extends Component {
  render() {
    return (
        <main>
            <BannerPrincipal />
            <OrgaosDefesa />
        </main>
    );
  }
}

export default Main;
