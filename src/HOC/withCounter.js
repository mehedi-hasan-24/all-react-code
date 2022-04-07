import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component{
        state = {
            count: 0,
        };

        setCounter = () =>{
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1,
                }
            });
        };

        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} setCounter={this.setCounter}/>
        }

    }
    return NewComponent;
}

export default withCounter;
