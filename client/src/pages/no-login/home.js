import React from "react";
import shine from "../../Images/shine.jpg"
import shine2 from "../../Images/shine2.jpg"
import shine3 from "../../Images/shine3.jpg"


const style = {
    buttons: {
        margin: "10px",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center"
    },
    navbar: {
        marginLeft: "1150px",
        align: "right",
        fontSize: "1.3rem",
        color: "red"
    }
};

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <a href="/restlogin"><nav
                    style={style.navbar}
                    type="navbar"
                    class="navbar navbar-expand-lg navbar-light bg-light">
                    Restaurant Login</nav></a>
                {/* <a class="navbar-brand" href="/">POS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/restlogin">Restaurant Login<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                //  */}
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center"><span className="fa fa-fire"></span>Webster Halsted</h1>
                        <hr />
                        <h2 className="text-center">Book your seat at our exclusive POS restaurants!</h2>
                        <br />

                        <div className="text-center">
                            {/* <a href="/tables"><button className="btn btn-lg btn-primary"><span className="fa fa-list-alt"></span> View Tables</button></a> */}
                            <a href="/Reservations"><button
                                style={style.buttons}
                                type="button"
                                class="btn btn-warning">
                                Reservation</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={shine} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine2} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine3} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine3} alt={"logo"} width="250px" height="250px"></img>
                    </div>
                </div>
                <footer className="footer">
                    {/* <div className="container">
                        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
                    </div> */}
                </footer>

            </div >
        );
    }
}

export default home;