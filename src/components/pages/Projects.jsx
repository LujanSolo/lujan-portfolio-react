export default function ProjectCard(props) {
  return (
    <div className='project--card'>
      <div className='card--header'>
      <h2 className='card--title'>{props.title}</h2>
      </div>
      
      <img
        src={require(`../../assets/images/${props.img}`)}
        className='card--image' />
      <h3 className='card--desc'>{props.desc}</h3>
      <footer className='card--footer'>
      <p>Deployed on</p>
        <a href={props.online}><img
            src={require('../../assets/images/heroku.png')}
            className='heroku--icon'
          />
          
        </a>
        <fr></fr>
        <p>GitHub Repo</p>
        <a href={props.github}>
          <img
            src={require('../../assets/images/github.png')}
            className='git--icon'
          />
          
        </a>
      </footer>

    </div>
  )
}