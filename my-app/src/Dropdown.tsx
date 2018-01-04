import * as React from 'react';

export interface IState {
    isOpened: Boolean
}
export interface IProps {

}
export class Dropdown extends React.Component<{}, IState> {
    constructor(props:{}) {
        super(props);
        this.state = {isOpened: true}
    }
    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }
    render() {
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div>Dropdown text</div>
        }
        return (
            <div>
                <div onClick={this.toggleState.bind(this)}>Dropdown</div>
                {dropDownText}
            </div>
        )
    }
}