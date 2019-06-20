import React,{Component} from 'react'
import axios from 'axios'

export const Fetchhoc = (Comp,url) => {
    class EnhanceComp extends Component {
        constructor(){
            super();
            this.state = {
                data :[]
            }
        }
        componentDidMount() {
            axios.get(url)
            .then( (res) => {
                this.setState({
                    data:res.data
                })
            })
        }
        render() {
            return (
                <Comp data={this.state.data} />
            )
        }
    }
    return EnhanceComp;

}