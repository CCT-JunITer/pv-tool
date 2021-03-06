import React, {Component} from 'react';
import cellClass from '../Cells.css';
import classes from './P1.css';

import {VictoryPie} from 'victory'

class P1 extends Component {
    state = {
        hoverSlice: -1
    }

    render() {
      const data = this.props.data
        const topClass = this.state.hoverSlice === 1 ? [classes.TopActiv, classes.CompartimentTop].join(' ') : classes.CompartimentTop
        const middleClass = this.state.hoverSlice === 0 ? [classes.MidActiv, classes.CompartimentMiddle].join(' ') : classes.CompartimentMiddle

        return (
            <div className={[cellClass.Cell, classes.P1].join(' ')}>
                <div className={classes.DataNumbers}>
                    <div className={topClass}><span>{data.bt} BT</span></div>
                    <div className={middleClass}><span>{data.ip} IP</span></div>
                    {data.available === 'Verfügbar' ?
                        <div style={{background: 'rgba(16,187,103,0.3)'}} className={classes.CompartimentBottom}><span>{data.available}</span></div> :
                        <div style={{background: 'rgba(239,46,46,0.3)'}} className={classes.CompartimentBottom}><span>{data.available}</span></div>}
                </div>
                <div className={classes.DataVis}>
                    <svg height="100%" viewBox="0 0 400 400">
                        <VictoryPie
                            padding={{top: 20, bottom: 20}}
                            colorScale={["white", "rgb(20,70,125)"]}
                            standalone={false}
                            width={400} height={400}
                            data={[
                                {x: 'BT', y: data.ip===0 ? 1 : data.ip, fillOpacity: 0.9, stroke: "rgb(20,70,125)", strokeWidth: 3},
                                {x: 'IP', y: data.bt===0 ? 1 : data.bt, fillOpacity: 0.9, stroke: "white", strokeWidth: 3}
                            ]}
                            labels={() => null}
                            innerRadius={68}
                            padAngle={4}
                            events={[
                                {
                                    target: "data",
                                    eventHandlers: {
                                        onMouseEnter: () => {
                                            return [{
                                                target: "data",
                                                mutation: (eventProps) => {
                                                    this.setState({hoverSlice: eventProps.index})
                                                    return ({
                                                        style: {...eventProps.style, strokeWidth: 6}
                                                    })
                                                }
                                            }]
                                        },
                                        onMouseLeave: () => {
                                            return [{
                                                target: "data",
                                                mutation: (eventProps) => {
                                                    this.setState({hoverSlice: -1})
                                                    return ({
                                                        style: {...eventProps.style, strokeWidth: 3}
                                                    })
                                                }

                                            }]
                                        }
                                    }
                                }
                            ]}
                        />
                    </svg>
                </div>
            </div>
        )
    }

};

export default P1;
