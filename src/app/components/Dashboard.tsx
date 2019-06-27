import * as React from 'react';

export class Dashboard extends React.Component<any, any> {
    public connection: any = null;

    constructor(props: any) {
        super(props);

        this.state = {
            dashText: "Hello World !"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.dashText}</h1>
            </div>
        )
    }
}