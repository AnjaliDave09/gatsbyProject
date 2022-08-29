import React from 'react'
import 'antd/dist/antd.css';
import '../Developers/developer.css';
import { Button, Card} from 'antd';


const Cardshow = () => {
  return (
  <div>
    <div className="site">
    <Card
      title={<img src='card title.png' alt=''></img>}
      bordered={false}
      className='firstcard'
    >
      <p>I wish to express my sincere gratitude to all the superheroes at Pesto. Got a very good exposure from domain experts. Special thanks to Satyam for his detailed classes and code reviews that never missed to Amaze me. Keep up the Great work.</p>
    </Card> 
    </div>
    <div className="site">
        <Card title={<img src='Title2.png' alt=''></img>}
          bordered={false}
          className='firstcardedit'>
          <iframe src="https://www.youtube.com/embed/pWahNIMRxR0" className='iframe' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Card>
    </div>

    <div className='sitemiddle'>
    <Card title={<img src='title5.png' alt=''></img>}
      bordered={false}
      className='newcard2'>
      <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className='iframe' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Card>
    </div>
    <div className='sitemiddle'>
    <Card title={<img src='Title6.png' alt=''></img>}
      bordered={false}
      className='newcard2edit'>
        <p>It was October 2020, when I came across Pesto Remote Program at Pesto Tech. Fortunately, I got selected and completed the program, under the mentorship of Arfat Salman and Ayush Jaiswal. This has been an incredible learning journey so far. Over the program, I've learned many things that have made me a better developer. I can see the difference in how I work, approach problems, and create solutions in a way that wasn't there before. I am very thankful to Arfat, Satyam, Vivek, and entire Pesto Tech team for all their support during the program. Looking forward to contributing to this great community Pesto Tech has built.</p>
        <Button value={'large'} className='cardbtn'>
            <a href='/Fordevelopers'>  Get Early Access→ </a>
        </Button>
    </Card>
    </div>

    <div className='siteright'>
    <Card title={<img src='title4.png' alt=''></img>}
      bordered={false}
      className='newcard3'>
      <p>I am thankful to Satyam, Arfat, Sugandha, Nidhin, Ayush & Entire Pesto team for directing me towards the Best I can think of. The journey so far has been great and full of learning from different people including my peers from my batch. It's great to be in this community. Would love to contribute and grow together here.</p>
    </Card>
    </div>
    <div className='siteright'>
    <Card title={<img src='Title3.png' alt=''></img>}
      bordered={false}
      className='newcardedit'>
      <p>A few months ago, I came across the Pesto Remote program at Pesto Tech. I immediately applied and luckily got selected as well. This has been an incredible journey so far. Over the last four months, I've learned many things that have made me a better developer. I can see the difference in how I work, approach problems, and create solutions in a way that wasn't there before. I am very thankful to Arfat, Nidhin, Vivek, Ayush and the entire Pesto tech team for all their guidance and support during the program. I look forward to contributing to this beautiful community built by Pesto Tech</p>
    </Card>
    </div>
  </div>
  )
}

export default Cardshow