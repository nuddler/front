import React from 'react';

export default class FooterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="footer" className="fixed-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a ><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a  target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p className="h6">&copy; All right Reversed. Fleeter</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </section>
      </React.Fragment >
    );
  }
}