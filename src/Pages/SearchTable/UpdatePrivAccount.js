import { Header } from "antd/lib/layout/layout"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function UpdatePrivAccount() {
  return (
    <nav className="nav">

      <ul>
      <CustomLink to="/index">Inicio</CustomLink>
        <CustomLink to="/updatedoc">UpdateDocPrivAcc</CustomLink>
        <CustomLink to="/updateprivacc">UpdatePrivAccount</CustomLink>
        <CustomLink to="/removelink">RemoveLink</CustomLink>
        <CustomLink to="/dateupdate">DateUpdate</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}