import React from 'react'
import { Row,Col } from 'antd'
import { OverviewBudget } from './budget'
import { OverviewTotalCustomers } from './totalcustomers'
import { OverviewTasksProgress } from './tasksprogress'
import { OverviewTotalProfit } from './totalprofit'
import { OverviewSales } from './sales'
import { OverviewTraffic } from './traffic'



export const Mainoverview = () => {
  return (
    <div>
        <div>
            <Row>
                <Col span={5}>
                    <OverviewBudget/>
                </Col>
                <Col span={5}>
                    <OverviewTotalCustomers/>
                </Col>
                <Col span={5}>
                    <OverviewTasksProgress/>
                </Col>
                <Col span={5}>
                    <OverviewTotalProfit/>
                </Col>
                <Col span={5}>
                    <OverviewBudget/>
                </Col>
            </Row>
            
        </div>
<div>
    <Row>
        <Col span={16}>
            {/* <OverviewSales/> */}
            <h1>hiii</h1>
        </Col>
        <Col span={8}>
            {/* <OverviewTraffic/> */}
            <h1>hiii</h1>
        </Col>
    </Row>
</div>

    </div>
  )
}
