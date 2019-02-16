import React, { Fragment } from 'react';

export default class About extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">

                    <h1 className="my-4">About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="my-4">Our Team</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="" />
                            <h3>John Smith<small>Job Title</small></h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="" />
                            <h3>John Smith<small>Job Title</small></h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="" />
                            <h3>John Smith<small>Job Title</small></h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                    </div>

                </div>


            </Fragment >
        );
    }
}