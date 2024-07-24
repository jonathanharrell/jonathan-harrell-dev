import "@/app/prism.css";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 lg:gap-x-16 py-48 article-body">{children}</div>
  )
}

export default Layout;