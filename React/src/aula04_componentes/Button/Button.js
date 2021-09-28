import React from 'react';
import './Button.css'

export class Button extends React.Component {
    click() {
        console.log('clicou no botão')
    }

    render() {
        return (
            <div  style={{ backgroundColor: 'red' }} className="button-component">
                <div onClick={this.props.onClick ?? (() => this.click())}>{this.props.title}</div>
            </div >
        )
    }
}

Button.defaultProps = {
    title: 'Botão',
};

