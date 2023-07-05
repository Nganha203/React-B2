import React, { Component } from 'react'
import DataGlasses from '../dataGlasses.json'
import CSS from '../../src/glass.css'
export default class Bailm extends Component {

    state = {
        selectedGlass: {},
        data: DataGlasses
    }
    changeGlass = (glass) => {
        this.setState({
            selectedGlass: glass

        })
    }

    render() {
        const { selectedGlass, data } = this.state
        return (
            <div className='bg'>
                <div className='container'>
                    {/* Giao dien nguoi mau */}
                    <div className='model'>
                        <img className='model-img' src='../../public/glassesImage/model.jpg'></img>
                    </div>

                    {/* Giao dien chon kinh */}
                    <div className='glass-container'>
                        {data.map((item) => (
                            <div className='glass-item'>
                                <img className='glass-img' onClick={() => this.changeGlass(item)} key={item.id} src={item.url}></img>
                                <p className='glass-name'>{item.name}</p>
                            </div>
                        ))}
                        {selectedGlass ? <img src={selectedGlass.url} className='selecGlass'></img> : 'ko thay'}
                    </div>
                </div>
            </div>
        )
    }
}
