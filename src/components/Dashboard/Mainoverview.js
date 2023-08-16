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
                <Col span={5} style={{marginRight:'10px'}}>
                    <OverviewBudget/>
                </Col>
                <Col span={5} style={{marginRight:'10px'}}>
                    <OverviewTotalCustomers/>
                </Col>
                <Col span={5} style={{marginRight:'10px'}}>
                    <OverviewTasksProgress/>
                </Col>
                <Col span={5} style={{marginRight:'10px'}}>
                    <OverviewTotalProfit/>
                </Col>
              
            </Row>
            
        </div>
        <br/>
        <br/>
<div>
    <Row>
        <Col span={16} style={{marginRight:'10px'}}>
            <OverviewSales/>
           
        </Col>
        <Col span={7}>
            <OverviewTraffic/>
            
        </Col>
    </Row>
</div>

    </div>
  )
}
