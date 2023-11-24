import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const Navbar = () => {
    return (
        <>
            <div>
                <div className="bg-[#E1C300] text-[#212122] p-2 text-center font-medium">
                    VISIT US ON TIKTOK @bravaland.com
                </div>

                <nav className="bg-[#212122] text-white p-4 sticky top-0">
                    <div className="flex items-center justify-between">
                      
                        <div className="flex space-x-4">
                            <a href="/">Brands</a>
                            <a href="/about">Shop</a>
                            <a href="/about">Premium</a>
                            <a href="/about">Gift Cards</a>
                         
                        </div>

                       
                        <div className="flex items-center">
                            <img src="/img/Artboard_1.webp" alt="Logo" className="w-42 h-14" />
                           
                        </div>

                    
                        <div className="flex space-x-4">
                            <a href="/social">Become an affiliate</a>
                            <a href="/social"><TwitterIcon/></a>
                            <a href="/social"><MusicNoteIcon/></a>
                            <a href="/social"><InstagramIcon/></a>
                            <a href="/social"><PersonIcon/></a>
                            <a href="/social"><SearchIcon/></a>
                            <a href="/social"><LocalMallOutlinedIcon/></a>
                        </div>
                    </div>
                </nav>
                {/* <div className="container mx-auto p-4">
        dfhtfjft
      </div> */}
            </div>

        </>
    )
}

export default Navbar