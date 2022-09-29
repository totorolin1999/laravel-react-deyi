import React, { Component } from 'react';


class ViewModal extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id={ "viewModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">燈具細節</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Name: <strong>{ this.props.lampData.currentLampName } </strong>
                        <hr />
                        Description: <strong>{ this.props.lampData.currentLampDescription } </strong>
                        <hr />
                        Image_name: <strong>{ this.props.lampData.currentLampImageName } </strong>
                        <hr />
                        Price: <strong>{ this.props.lampData.currentLampPrice } </strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;