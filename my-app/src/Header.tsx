import * as React from 'react';

interface IProps {
    items: Array<IHeaderItem>
}
interface IHeaderItem {
    link: string,
    label: string
}

interface IState {

}
export class Header extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.items.map((item, index) =>
                    <a href={item.link}>{item.label}</a>
                )}
            </div>
        )
    }
}