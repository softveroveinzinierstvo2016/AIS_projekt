import React, {Component} from 'react';
import {Button, Slider} from "antd";
import './Common.css';

const Aux = props => props.children;

class Filter extends Component {
    render() {
        return (

            <div className="scrollable-content">
                <div className="profile">
                    <h1 className="profile-header2">Filter</h1>

                    <div className="box1">
                        <table className="profile-info">
                            <tr className="row-group">
                                <td className="table-key">Sólista/skupina:</td>
                                <td colSpan="2">{this.props.soloOptions.map((option) => {
                                    return (
                                        <tr htmlFor={"o" + option.id}>
                                            <input className="vstup"
                                                   type="radio"
                                                   name="solo-options"
                                                   id={"o" + option.id}
                                                   value={option.id}
                                                   checked={option.value}
                                                   onChange={(event) => this.props.soloOptionsChanged(option.id)}
                                            />{option.name}</tr>
                                    )
                                })}</td>
                            </tr>
                            <tr className="row-empty"/>
                            <tr className="row-group">
                                <td className="table-key">Typ performera:</td>
                                <td colSpan="2">{this.props.types.map((type, index) => {
                                    return (
                                        <tr><input
                                        className="vstup"
                                            onChange={(event) => this.props.typeCheck(index, event)}
                                            id={"t" + type.id} type="checkbox"
                                            checked={type.val}/>
                                            <label htmlFor={"t" + type.id}>{type.name}</label></tr>
                                    )
                                })}</td>
                            </tr>
                            <tr className="row-empty"/>
                            <tr className="row-group">
                                <td className="table-key">Štýl performera:</td>
                                <td colSpan="2">{this.props.styles.map((style, index) => {
                                    return (
                                        <tr><input
                                        className="vstup"
                                            onChange={(event) => this.props.styleCheck(index, event)}
                                            id={"s" + style.id} type="checkbox"
                                            checked={style.val}/>
                                            <label htmlFor={"s" + style.id}>{style.name}</label></tr>
                                    )
                                })}</td>
                            </tr>
                            <tr className="row-empty"/>
                            <tr className="row-group">
                                <td className="table-key">Typ produkcie:</td>
                                <td>
                                    <table>
                                        {this.props.categories.map((cat, index) => {
                                            return (<Aux>
                                                <tr>
                                                    <td colSpan="3">
                                                        <input
                                                        className="vstup"
                                                            onChange={(event) => this.props.categoryCheck(index, event)}
                                                            id={cat.id} type="checkbox"
                                                            checked={cat.val}/>
                                                        <label
                                                            htmlFor={cat.id}>{cat.name}</label>
                                                    </td>
                                                </tr>
                                                {cat.subcategories.map((subcat, index2) => {
                                                    return (
                                                        <tr hidden={!cat.val}>
                                                            <input
                                                            className="vstup"
                                                                className="subcategory-checkbox"
                                                                type="checkbox"
                                                                onChange={(event) => this.props.subcategoryCheck(index, index2, event)}
                                                                id={"sub" + subcat.id}
                                                                checked={subcat.val}/>
                                                            <label
                                                                htmlFor={"sub" + subcat.id}>{subcat.name}</label>
                                                            <div>

                                                            </div>
                                                        </tr>)
                                                })}
                                            </Aux>)
                                        })}
                                    </table>
                                </td>
                            </tr>
                            <tr className="row-empty"/>
                            <tr className="row-group">
                                <td className="table-key">Cena:</td>
                                <td colSpan="2">
                                    <Slider className="slider" range tooltipVisible={true} alwaysShowTooltip={true}
                                            label="lala"
                                            marks={this.props.price.marks}
                                            defaultValue={[this.props.price.min, this.props.price.max]}
                                            onChange={(event) => this.props.priceChanged(event)}/>
                                    <label
                                        className="price-label">{"Od " + this.props.price.min + " - do " + this.props.price.max + "€"}</label>

                                </td>
                            </tr>
                            <tr className="row-empty"/>
                        </table>
                    </div>
                    <Button className="ok-button" onClick={this.props.modalClose}>
                        Použiť filter
                    </Button>
                </div>
            </div>

        )
    }
}

export default Filter;
