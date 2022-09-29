import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Select from "react-select";

// const categories = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

// const styles = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]


class CreateModal extends Component {
    
    constructor(props) {
        super(props);

        this.state= {
            lampName: null,
            lampDescription: null,
            lampImageName: null,
            lampPrice: null,
            lampCategory: null,
            lampStyle: null,
        }
    }
    inputLampName = (event) => {
        this.setState({
            lampName: event.target.value,
        });
    }


    inputLampDescription = (event) => {
        this.setState({
            lampDescription: event.target.value,
        });
    }
    
    // inputLampImageName = (event) => {
    //     this.setState({
    //         lampImageName: event.target.value,
    //     });
    // }
    
    inputLampImageName = (event) => {
        this.setState({
            lampImageName:event.target.files[0],
        });
    }

    inputLampPrice = (event) => {
        this.setState({
            lampPrice: event.target.value,
        });
    }

    inputLampCategory = (event) => {
        this.setState({
            lampCategory: event.target.value,
        });
    }

    inputLampStyle = (event) => {
        this.setState({
            lampStyle: event.target.value,
        });
    }

    // inputLampStyle = (event) => {
    //     const values = Array.from(event.target.selectedOptions, option => option.value);
    //     this.setState({
    //         lampStyle: values,
    //     });
    // }

    storeLampData = () => {
        // Try '/api/store/lamp/data'
        axios.post('/store/lamp/data',{
            lampName: this.state.lampName,
            lampDescription: this.state.lampDescription,
            lampImageName: this.state.lampImageName,
            lampPrice: this.state.lampPrice,
            lampCategory: this.state.lampCategory,
            lampStyle: this.state.lampStyle
        }, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then(() => {
            toast.success("此筆資料儲存成功！");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }
    
    render() {
        return (
            <>
                <div className="row text-right mb-3 pb-3">
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-bs-toggle="modal"
                        data-bs-target="#modalCreate"
                    >
                        新增燈具
                    </button>
                </div>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">燈具細節</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text"
                                        id="lampName"
                                        className='form-control mb-3'
                                        placeholder='燈具型號'
                                        onChange={this.inputLampName}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                        id="lampDescription"
                                        className='form-control mb-3'
                                        placeholder='燈具描述'
                                        onChange={this.inputLampDescription}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="file"
                                        id="lampImageName"
                                        className='form-control mb-3'
                                        placeholder='燈具圖片'
                                        onChange={this.inputLampImageName}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                        id="lampPrice"
                                        className='form-control mb-3'
                                        placeholder='燈具價格'
                                        onChange={this.inputLampPrice}
                                    />
                                </div>

                                <div className="form-group">
                                    {/* <Select options={categories} 
                                        id="lampCategory"
                                        className='form-control mb-3'
                                        placeholder='燈具類別'
                                        onChange={this.inputLampCategory}
                                        value={categories}
                                    /> */}
                                    <select
                                        id="lampCategory"
                                        className='form-control mb-3'
                                        placeholder='燈具類別'
                                        onChange={this.inputLampCategory}
                                        value={this.state.value}
                                    >
                                        <option value="">選擇燈具類別</option>
                                        <option value="1">吊掛式</option>
                                        <option value="2">吸頂式</option>
                                        <option value="3">壁掛式</option>
                                        <option value="4">桌檯式</option>
                                        <option value="5">落地式</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    {/* <Select isMulti options={styles} 
                                        id="LampStyle"
                                        className='form-control mb-3'
                                        placeholder='燈具風格'
                                        onChange={this.inputLampStyle}
                                    /> */}
                                    <select
                                        id="lampStyle"
                                        className='form-control mb-3'
                                        placeholder='燈具風格'
                                        onChange={this.inputLampStyle}
                                        multiple={true}
                                    >
                                        <option value="">選擇燈具風格</option>
                                        <option value="1">典雅細緻</option>
                                        <option value="2">北歐設計</option>
                                        <option value="3">工業復古</option>
                                        <option value="4">木藝森活</option>
                                        <option value="5">現代時尚</option>
                                        <option value="6">簡約環保</option>
                                        <option value="7">華麗水晶</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="button"
                                value='Save'
                                className='btn btn-info'
                                onClick={this.storeLampData}
                            />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal;