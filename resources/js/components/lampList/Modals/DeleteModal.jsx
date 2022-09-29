import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class DeleteModal extends Component {
    
    constructor(props) {
        super(props);
    }

    deleteLampData = (lamp) => {
        axios.delete('/delete/lamp/data/'+lamp).then(() => {
            toast.error("此筆資料成功刪除！")

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={ "deleteModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">燈具細節</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        你確定要刪除這筆資料嗎？
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        onClick={ () => {this.deleteLampData(this.props.modalId)} }>
                            Yes
                        </button>
                        <button type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;