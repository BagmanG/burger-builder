import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingridientSummary = Object.keys(props.ingridients).map(igKey => (
        <li key={igKey}>
            <span style={{ textTrasnsform: 'capitalize' }}>{igKey}</span>:
            {props.ingridients[igKey]}
        </li>
    ));

    return (
        <Aux>
            <h3>You order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>{ingridientSummary}</ul>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>
                CANCEL
            </Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;
