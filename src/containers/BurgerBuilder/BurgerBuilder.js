import React, {Component} from 'react';
import Burger from '../../compontents/Burger/Burger.js';

class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <Burger/>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;
