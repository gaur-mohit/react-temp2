import React , {Component} from "react";

class MemeGen extends Component{
  constructor(){
    super();
    this.state={
      topText="",
      randomImg="https://i.imgflip.com/1bij.jpg",
      bottomText="",
      allMeme=[]
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response=> response.json())
    .then(response=>{
      const {memes}=response.data
      this.setState({allMeme:meme})
    })
  }
  handleChange(event){
    const {name,value}=event.target
    this.setState({[name]:value})
  }

  handleSubmit(event){
    event.preventDefault()
    const randomNumber= Math.floor(Math.random()*this.state.allMeme.length)
    const randMemeImg=this.state.allMeme[randomNumber].url
    this.setState({randomImg: randomMemeImg})
  }

  render(){
    return(
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={this.state.topText}
          onChange={this.handleChange}
          />

        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={this.state.bottomText}
          onChange={this.handleChange}
          />
        <button> Generate! </button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="Meme"/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGen