import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class TableRow extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col">
                <div className="card h-100">
                    <img src={ "/storage/images/products/"+this.props.data.image_name } className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{ this.props.data.category.name }</p>
                        <h5 className="card-title fw-bold">{ this.props.data.name }</h5>
                        <h6 className="card-title fw-bold">{ this.props.data.price }</h6>
                        {this.props.data.styles.map(function (list) {
                            return <p className="card-text">{list.name}</p>
                        })}
                        <h6 className="card-title fw-bold">{ this.props.data.description }</h6>
                        <h6 className="card-title fw-bold">{ this.props.data.image_name }</h6>
                        <button type="button" className="btn btn-outline-dark">加入購物車</button>
                        <TableActionButtons eachRowId={ this.props.data.id }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableRow;