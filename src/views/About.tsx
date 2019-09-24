import React, { Fragment } from 'react';

export default class About extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className="my-4">O nas</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="my-4">Nasz zespół</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560" alt="" />
                            <h3>Jan Kowalski <small>DEV</small></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="https://media.istockphoto.com/photos/portrait-of-handsome-man-in-shirt-smiling-isolated-picture-id996067484" alt="" />
                            <h3>Piotr Piotrowski <small>CEO</small></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="https://media.istockphoto.com/photos/confident-mature-businessman-in-office-picture-id973714826" alt="" />
                            <h3>Janusz Klasyczny <small>CarMaster</small></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}
