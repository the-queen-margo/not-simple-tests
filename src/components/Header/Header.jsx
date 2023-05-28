import './Header.css';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

export function Header( ) {
    return (
        <div className="header">
            <a href="/" className="logo">SmartTest</a>
      
                <a href='/test'>Тесты</a>
                <a>Статистика</a>
                <a href="/register">Регистрация</a>
                <div className="header-right">

                 <AccessibleForwardIcon/><span className='name'> гость Г.</span><br/>
                 <CurrencyRubleIcon/><span className='points'>1000 очков</span>   
                </div>
            </div>
        
    );
}