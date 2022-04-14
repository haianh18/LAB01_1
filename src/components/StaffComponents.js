import React, { Component } from 'react';
import dateFormat from 'dateformat';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className='col-12'>
                <Card>
                    <CardImg width='100%' src={staff.image} alt={staff.name} />
                    <CardBody>
                        <CardTitle>Họ và Tên: {staff.name}</CardTitle>
                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Phòng ban: {staff.department}
                            </CardText>
                            <CardText>
                                Số ngày nghỉ còn lại: {staff.annualLeave}
                            </CardText>
                            <CardText>
                                Số ngày đã làm thêm: {staff.overTime}
                            </CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const staffList = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardImgOverlay>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className='container'>
                <div className='row'>
                    {staffList}
                </div>
                <div className='row'>
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )

    }
}

export default StaffList;