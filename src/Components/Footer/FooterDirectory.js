import React, { Component } from 'react';
import uuid from 'uuid';
import FooterDirItems from './FooterDirItems';
import footer_directory from '../../data/footer_dir_p1';

class FooterDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerdir_data: []
        };
    }

    getData(){
        this.setState({
        footerdir_data: footer_directory
        })
      }
    
    componentWillMount(){
        this.getData();
    }

  render() {
    
    let footerItems, lastset;
    footerItems = this.state.footerdir_data.map((fdata, i) => {
        
        if(i === this.state.footerdir_data.length - 1){
            lastset = true
        }

        return (
            <FooterDirItems isLastset={lastset} key={uuid.v4()} fdata={fdata} />
        )
    });
    
    return (
        <div className="footer-directory">
            {footerItems}
        </div>
    );
  }
}

export default FooterDirectory;
