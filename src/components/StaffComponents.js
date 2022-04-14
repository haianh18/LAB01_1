import React, { Component } from 'react';
import dateFormat from 'dateformat';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
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
                    <CardBody>
                        <CardTitle>Họ và Tên: {staff.name}</CardTitle>
                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Phòng ban: {staff.department.name}
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
                <div className='col-12'><strong>Bấm vào tên nhân viên để xem thông tin.</strong></div>
            )
        }
    }

    render() {

        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className='col-12 col-md-6 col-lg-4 mt-3'>
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <div className='container'>
                <div className='row'>
                    {staffList}
                </div>
                <div className='row mt-5'>
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )

    }
}

export default StaffList;