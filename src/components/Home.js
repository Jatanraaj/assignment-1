import React from 'react'
import Slider from './Slider'
import Explore from './explore'
import Products from './gallery'
import Products2 from './product2'
import Contact from './contactus'
import Category from './Category'

export default class Home extends React.Component {
  render() {
    return (
        <div class="container-fluid">
        <Slider/>
        <Explore/>
        <Products/>
        <Products2/>
        </div>
    )
  }
}
