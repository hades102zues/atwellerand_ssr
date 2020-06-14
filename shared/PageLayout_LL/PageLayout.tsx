import React, { Component } from "react";
import Header from "./Header/Header";
import SideDrawer from "./SideDrawer/SideDrawer";
import Footer from "./Footer/Footer";

const { withRouter } = require("react-router-dom");
interface IProps {
    children: JSX.Element;
    location: any;
}

interface IState {
    openDrawer: boolean;
}

class PageLayout extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }

    //The following function is provided through by react router.
    //its purpose is to force a scroll top on url change.

    componentDidMount(): void {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps: any): void {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    sideDrawerOpenHandler: any = () => {
        this.setState((prevState: any) => {
            return { openDrawer: !prevState.openDrawer };
        });
    };

    render() {
        return (
            <React.Fragment>
                <Header clickForBurger={this.sideDrawerOpenHandler} />
                <SideDrawer modalClick={this.sideDrawerOpenHandler} open={this.state.openDrawer} />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(PageLayout);
