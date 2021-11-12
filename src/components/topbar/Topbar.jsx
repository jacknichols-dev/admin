import './Topbar.scss'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__left">
                    <span className="topbar__left--logo">LEE'S ADMIN</span>
                </div>
                <div className="topbar__right">Right</div>
            </div>
        </div>
    )
}
