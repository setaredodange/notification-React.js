import React, { Component } from 'react'

export default class Header extends Component {
 constructor(){
super()

this.state = {
    notification:[
        "hello",
        "how are you",
        "thanks",
        "I miss you"
    ]
}

}

  render() {
    return (
    
            <div className= "container">
                <a>Hello World</a>
               

                <div>
                    <ul>
                        {this.state.notification.length > 0 && (
                          <li>
                          <span>{this.state.notification.length} </span>
                          <a>news </a>
                              
                      </li>   
                        )}
                        
                    </ul>
                </div>

            </div>
      
     
    )
  }
}
