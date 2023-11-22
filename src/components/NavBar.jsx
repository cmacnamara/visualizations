// npm modules
import { NavLink } from 'react-router-dom'

// css & assets
import styles from './NavBar.module.css'

const NavBar = () => {

  const publicLinks = (
    <ul>
      <NavLink id={styles.links} to="/barChart"><li className={styles.mainNavBtns}>Bar Chart</li></NavLink>
      <NavLink id={styles.links} to="/scatterPlot"><li id={styles.logout}>Scatter Plot</li></NavLink>
    </ul>
  )

  return (
    <nav className={styles.navContainer}>
      <NavLink id={styles.links} to={`/`}><span className={styles.home}>Home</span></NavLink>
      {publicLinks}
    </nav>
  )
}

export default NavBar
