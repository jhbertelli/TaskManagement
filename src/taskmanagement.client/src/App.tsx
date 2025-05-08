import { paths } from 'constants/paths'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.register} Component={RegisterPage} />
                <Route path={paths.login} Component={LoginPage} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
