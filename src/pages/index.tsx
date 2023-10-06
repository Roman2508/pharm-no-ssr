import { HomePageLayout } from '@/layouts/HomePageLayout'
import About from '@/components/About/About'
import Announcement from '@/components/Announcement/Announcement'
import Stats from '@/components/Stats/Stats'
import { News } from '@/components/News/News'
import { Events } from '@/components/Events/Events'
import { Gallery } from '@/components/Gallery/Gallery'
import { Videos } from '@/components/Videos/Videos'
import { Contacts } from '@/components/Contacts/Contacts'
import { Partners } from '@/components/Partners/Partners'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <HomePageLayout title="Головна сторінка | ЖБФК">
      <Announcement />
      <About />
      <Stats />
      <div className="container">
        <News showTitle addMarginBottom />
      </div>
      <Events />
      <Gallery />
      <Videos />
      <Contacts />
      <Partners />
    </HomePageLayout>
  )
}

export default Home
