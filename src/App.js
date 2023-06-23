import logo from './logo.svg';
import './App.css';
// import Card from './card';

const Card=(props)=>{
  console.log(props)
  return(
  <div className="App">
     <div className='cards'>
    <div className='card'>
      <img src={props.img_src} alt="myPic" className='card_img'/>
      <div className='card_info'>
        <span className='card_category'>{props.s_name}</span>
          <h3 className='card_title'> {props.title}</h3>
          <a href={props.link} target='_blank'>
            <button>Watch now</button>
          </a>
      </div>
    </div>
  </div>

  {/* <input type='text' value={'abc'}/> */}
  </div>
  )
}
const App=()=> {
  return (
    <Card img_src="https://e0.pxfuel.com/wallpapers/492/443/desktop-wallpaper-black-panther-superhero-dark-glowing-mask.jpg"
          title="A Netflix Original Series"
          s_name="Wakanda"
          link="https://www.netflix.com/search?q=wakanda&jbv=80218506"
          />
    
  );
}

export default App;
