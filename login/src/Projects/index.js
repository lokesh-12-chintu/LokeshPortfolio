import './index.css'
import Header from '../Header'

const Projects = () => (
  <>
    <Header />
    <div className="template-container">
      <div className="name-box">
        <h1>Technical skills</h1>
      </div>
      <div className="project-box">
        <div className="project">
          <p>
            A small project on <span className="span"> Static Website </span>{' '}
            using HTML CSS Bootstrap technologies.
          </p>
          <a href="http://tourism768.ccbp.tech">
            <button className="button">Click Here</button>
          </a>
        </div>
        <div className="project">
          <p>
            A project on <span className="span">Responsive Website </span> using
            HTML CSS BOOTSTRAP technologies.
          </p>
          <a href="http://jittafoodmunch.ccbp.tech">
            <button className="button">Click Here</button>
          </a>
        </div>
        <div className="project">
          <p>
            A small project on <span className="span"> Todo's List </span> using
            JavaScript technology.
          </p>
          <a href="http://todo321.ccbp.tech">
            <button className="button">Click Here</button>
          </a>
        </div>
        <div className="project">
          <p>
            A small project on <span className="span"> Ecommerce </span> using
            React Redux Library Tools.
          </p>
          <a href="https://e-commerce-c56e3.web.app">
            <button className="button">Click Here</button>
          </a>
        </div>
      </div>
    </div>
  </>
)

export default Projects
