import React, { Component, createRef } from 'react'

class NavBarController extends Component {
  state = {
    scrollTop: 0,
    navHight: 0,
    isUp: false
  }
  headerRef = createRef()
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
    this.setNavHeight(this.headerRef.current.clientHeight)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }
  setNavHeight = navHight => {
    this.setState({
      navHight
    })
  }
  onScroll = () => {
    const { scrollTop, navHight } = this.state
    const currentScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (
      scrollTop < currentScrollTop &&
      currentScrollTop > navHight + navHight
    ) {
      this.setState({
        isUp: true
      })
    } else if (
      scrollTop > currentScrollTop &&
      !(currentScrollTop <= navHight)
    ) {
      this.setState({
        isUp: false
      })
    }
    this.setScrollTopValue(currentScrollTop)
  }
  setScrollTopValue = scrollTop => {
    this.setState({
      scrollTop
    })
  }
  render() {
    return (
      <nav
        ref={this.headerRef}
        className={`${this.state.isUp ? 'scrollUp' : ''}`}
      >
        {this.props.children}
      </nav>
    )
  }
}

export default NavBarController
