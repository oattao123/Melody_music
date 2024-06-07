import Header from '@/components/Header'; 
import ListItem from '@/components/ListItem';
import getSongs from '@/actions/getSongs';
import PageContent from './components/PageContent';
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  
  return (
    
    <div className="
    bg-gradient-to-r from-customColor1 to-customColor4
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    ">
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-white
            text-3xl
            font-semibold
            ">
              Hello, welcome to Melo music
            </h1>
            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              sxl:grid-cols-4
              gap-3
              mt-4
              ">
                <ListItem
                  image="/images/playlist_icon.png"
                  name="Songs in your playlist"
                  href="/liked"
                />
              </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            All Our Songs
          </h1>
        </div>
        <div>
            <PageContent songs={songs}/>
          </div>
      </div>
      </div>
  )
}
