import React, { PropTypes, Component } from 'react';


class UserList extends Component {

    render(){
      
      //console.log(this.props.data);

      var list = this.props.data.map(function(item) {
        return <li key={item.id}>{item.first} <strong>{item.last}</strong></li>
      });

      return (
        <ul>
          {list}
        </ul>
      );
    }
}

export default UserList;
