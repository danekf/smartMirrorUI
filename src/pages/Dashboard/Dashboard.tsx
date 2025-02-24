import { useNavigate } from "react-router-dom";

type moduleComponent = {
  name: string,
  iconLink: string,
  link: string,  
}

const Dashboard = () => {
  const navigate = useNavigate();

  const redirectOnClick = (link: string) => {
    navigate(link);
  };

  /* Dashboard modules will ideally be dynamic in final. */
  const dashboardModules: moduleComponent[] = [
    {name: 'Daily Planner', iconLink:'/vite.svg', link:'/planner/today'},
    {name: '2', iconLink:'/vite.svg', link:'/2'},
    {name: '3', iconLink:'/vite.svg', link:'/3'},
    {name: '4', iconLink:'/vite.svg', link:'/4'},
  ];

  const moduleComponents = dashboardModules.map( (module) => {
    return(
      <li key={module.name} className="module w-[28rem] h-[16rem] border-2 border-solid flex flex-col" onClick={() => redirectOnClick(module.link)}>
        <img className="ml-[10px] mt-[10px] w-[5rem]" src={module.iconLink} alt={module.name}/> 
        <span className="name">{module.name}</span>
        <div className="miscUse grow"></div>
      </li>
    );
  });
  
  return (
    <div className="dashboard">
      <h1 className="m-[1rem]">Dashboard</h1>
      <div className="modulesList">
        <ul className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-6 ">
          {moduleComponents}
        </ul>
      </div>
    </div>
  )
};

export default Dashboard;