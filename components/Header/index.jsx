import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
function Header() {
    return (
        <>
            <header className="col-12 m-0  mb-2">
                <nav className="navbar navbar-expand-lg headerNav__sama">
                    <div className="container-fluid">
                        <Link href='/' className="navbar-brand">
                            <lord-icon

                                src="https://cdn.lordicon.com/spsqhhyu.json"
                                trigger="loop"
                                stroke="bold"
                                style={{
                                    width: '200px',
                                    height: '60px'
                                }}
                            >
                            </lord-icon>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end align-items-center collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex align-items-center">
                                <ul className="navbar-nav text-center">
                                    <li className="nav-item px-3 py-2 py-lg-0">
                                        <a className={` ${styles["button"]}  nav-link`} href="/">Home</a>
                                        
                                    </li>
                                    <li className="nav-item px-3 py-2 py-lg-0">
                                        <a className={` ${styles["button"]}  nav-link`} href="/portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item px-3 py-2 py-lg-0">
                                        <a className={` ${styles["button"]}  nav-link`} href="/skills">Skills</a>
                                    </li>
 

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={styles["line-bottom-header"]}></div>
            </header>
        </>
    )
}

export default Header