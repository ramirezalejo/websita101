import React from "react";
import ReactPlayer from 'react-player'

class ResponsivePlayer extends React.Component {
  constructor(props)
  {
    super(props)
    this.url=props.url
    this.width = props.width || '100%'
  }
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={this.url}
            width={this.width}
            //height='10%'
          />
        </div>
      )
    }
  }

  export default ResponsivePlayer