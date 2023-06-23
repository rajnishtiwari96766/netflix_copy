import logo from './logo.svg';
import './App.css';
import Card from './card';
import Sdata from './s_data';


console.log()
const App=()=> {
  return (
    <>
    <h1>List of top 5 NetFlix Originals</h1>
    <Card img_src={Sdata[0].img_src}
          title={Sdata[0].title}
          s_name={Sdata[0].s_name}
          link={Sdata[0].link}
          />
    <Card img_src={Sdata[1].img_src}
          title={Sdata[1].title}
          s_name={Sdata[1].s_name}
          link={Sdata[1].link}
          />
    <Card img_src={Sdata[2].img_src}
          // width={Sdata[2].s_name}
          title={Sdata[2].title}
          s_name={Sdata[2].s_name}
          link={Sdata[2].link}
          />
    <Card img_src={Sdata[3].img_src}
          // width={Sdata[2].s_name}
          title={Sdata[3].title}
          s_name={Sdata[3].s_name}
          link={Sdata[3].link}
          />
    <Card img_src={Sdata[4].img_src}
          // width={Sdata[2].s_name}
          title={Sdata[4].title}
          s_name={Sdata[4].s_name}
          link={Sdata[4].link}
          />
    </>
    
  );
}

export default App;
