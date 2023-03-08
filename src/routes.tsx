import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Error } from './pages/Error/Error';
import { Singin } from './pages/Singin/Singin';

export function RoutesApp(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/produtos' element={<About />} />
                    <Route path='/produto:id' element={<About />} />
                    <Route path='/artistas' element={<About />} />
                    <Route path='/mural' element={<About />} />
                    <Route path='/producoes' element={<About />} />
                    <Route path='/acesso' element={<Singin />} />

                    <Route path='/*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}