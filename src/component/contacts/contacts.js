import React, {Component} from 'react';
import Contact from './contact'
import Female_icon from "../../img/female.svg";
import Male_icon from "../../img/mars.svg";
import './contacts.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];


class Contacts extends Component {
    state = {
        contacts : [...contacts],
        // isMale: true,
        // isFemale: true
    } 

    // handleFilterMale = (e) => {
    //     if (this.state.isMale) {
    //         const res = this.state.contacts.filter(i => i.gender==="male")
    //         this.setState({
    //             contacts: [...res],
    //             isMale: !this.state.isMale
    //         })
    //     } else {
    //         this.setState({
    //             // contacts: [...contacts],
    //             // const fin = this.state.contacts;
    //             contacts: this.state.contacts.filter(i => i.gender !=="male"),
    //             isMale: !this.state.isMale
    //         })
    //     }
    // }

    // handleFilterFemale = (e) => {
    //     if (this.state.isFemale) {
    //         const res = this.state.contacts.filter(i => i.gender==="female")
    //         this.setState({
    //             contacts: [...res],
    //             isFemale: !this.state.isFemale
    //         })
    //     } else {
    //         this.setState({
    //             contacts: contacts.filter(i => i.gender !== 'female'),
    //             // contacts: [...contacts],
    //             isFemale: !this.state.isFemale
    //         })
    //     }
    // }

    handleSearchChange = (e) => {
        
        const res = contacts.filter(item => (
            item.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || item.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || item.phone.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        ));

        this.setState({
            search: e.target.value,
            contacts: [...res]
        })
    }




    render() {
        return (
            <>
            {/* <div className="chackbox_wrapper">
                <input type="checkbox" checked={this.state.isMale} value="male" onChange={this.handleFilterMale} />
                <input type="checkbox" checked={this.state.isFemale} value="female" onChange={this.handleFilterFemale} />
                {/* <input type="checkbox" checked={this.state.isAll} value="all" onChange={this.handleFilterAll} /> 
            </div> */}
      

            <div className="contact_inputwrapper"> 
                <input className="contact_input" type="text" value = {this.state.search} onChange = {this.handleSearchChange} />
            </div>
            
            {this.state.contacts.map(contactItem => {
                return (
                    <Contact {...contactItem} icon = { contactItem.gender ? (contactItem.gender === "female" ? Female_icon : Male_icon) : null }/>
                )
            })}</>
        )
    }
}




export default Contacts;
