
type moduleComponent = {
  name: string,
}

const Dashboard = () => {

  const dashboardModules: moduleComponent[] = [{name: '1'},{name: '2'},{name: '3'},{name: '4'},];

  const moduleComponents = dashboardModules.map( (module) => {
    return(
      <li className="module">{module.name}</li>
    )
  })
  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="modules flex items-center">
        <ul className="flex">
          {moduleComponents}
        </ul>
      </div>
    </div>
  )
};

export default Dashboard;