import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Error } from './pages/Error/Error';
import { Singin } from './pages/Singin/Singin';
import { GuestArtists } from './pages/GuestArtists/GuestArtists';
import { GuestArtistsDetail } from './pages/GuestArtists/GuestArtistsDetail';
import { Mural } from './pages/Mural/Mural';
import { MuralDatails } from './pages/Mural/MuralDatails';

export function RoutesApp(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/produtos' element={<About />} />
                    <Route path='/produtos/:id' element={<About />} />
                    <Route path='/artistas' element={<GuestArtists />} />
                    <Route path='/artistas/:id' element={<GuestArtistsDetail />} />
                    <Route path='/mural' element={<Mural />} />
                    <Route path='/mural/:id' element={<MuralDatails />} />
                    <Route path='/producoes' element={<About />} />
                    <Route path='/acesso' element={<Singin />} />

                    <Route path='/*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}