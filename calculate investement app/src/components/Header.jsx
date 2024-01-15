import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt='Logo bag'/>
            <h1>Investement calculator</h1>
        </header>
    )
}
