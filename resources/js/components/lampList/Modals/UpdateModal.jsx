import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {
    
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

    static getDerivedStateFromProps(props, current_state) {
        let lampUpdate = {
            lampName: null,
            lampDescription: null,
            lampImageName: null,
            lampPrice: null,
            lampCategory: null,
            lampStyle: null,
        }


        if (current_state.lampName && (current_state.lampName !== props.lampData.currentLampName)){
            return null;
        }

        if (current_state.lampDescription && (current_state.lampDescription !== props.lampData.currentLampDescription)){
            return null;
        }

        if (current_state.lampImageName && (current_state.lampImageName !== props.lampData.currentLampImageName)){
            return null;
        }

        if (current_state.lampPrice && (current_state.lampPrice !== props.lampData.currentLampPrice)){
            return null;
        }

        if (current_state.lampCategory && (current_state.lampCategory !== props.lampData.currentLampCategory)){
            return null;
        }


        if(current_state.lampName !== props.lampData.currentLampName || 
            current_state.lampName === props.lampData.currentLampName) {
            lampUpdate.lampName = props.lampData.currentLampName;
        }

        if(current_state.lampDescription !== props.lampData.currentLampDescription || 
            current_state.lampDescription === props.lampData.currentLampDescription) {
            lampUpdate.lampDescription = props.lampData.currentLampDescription;
        }

        if(current_state.lampImageName !== props.lampData.currentLampImageName || 
            current_state.lampImageName === props.lampData.currentLampImageName) {
            lampUpdate.lampImageName = props.lampData.currentLampImageName;
        }

        if(current_state.lampPrice !== props.lampData.currentLampPrice || 
            current_state.lampPrice === props.lampData.currentLampPrice) {
            lampUpdate.lampPrice = props.lampData.currentLampPrice;
        }

        if(current_state.lampCategory !== props.lampData.currentLampCategory || 
            current_state.lampCategory === props.lampData.currentLampCategory) {
            lampUpdate.lampCategory = props.lampData.currentLampCategory;
        }

        return lampUpdate;
    }

    updateLampData = () => {
        axios.post('/update/lamp/data',{
            lampId: this.props.modalId,
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
            toast.success("此筆資料更新成功！");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={ "updateModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    value={this.state.lampName ?? ""}
                                    onChange={this.inputLampName}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="lampDescription"
                                    className='form-control mb-3'
                                    value={this.state.lampDescription ?? ""}
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
                                    value={this.state.lampPrice ?? ""}
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
                        <input type="text"
                            className='btn btn-info'
                            value="Update"
                            onClick={this.updateLampData}
                        />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;