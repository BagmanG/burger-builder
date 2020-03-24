import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate()');
    }

    render() {
        const ingridientSummary = Object.keys(this.props.ingridients).map(
            igKey => (
                <li key={igKey}>
                    <span style={{ textTrasnsform: 'capitalize' }}>
                        {igKey}
                    </span>
                    :{this.props.ingridients[igKey]}
                </li>
            )
        );
        return (
            <Aux>
                <h3>You order</h3>
                <p>A delicious burger with the following ingridients:</p>
                <ul>{ingridientSummary}</ul>
                <p>
                    <strong>Total Price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>
                    CANCEL
                </Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
