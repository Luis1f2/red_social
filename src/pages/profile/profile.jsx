import "./profile.css"
import font_page from "../../components/img/Portada3.webp"
import img_perfil from "../../components/img/Perfil2.jpeg"

export function Profile() {
    return (

        <div className="profile">
            <div className="left-pane">
                <div className="header">
                    <img className="front-page" src={font_page} alt="" />
                    <div className="section-left">
                    <img className="img-profile" src={img_perfil} alt="" />
                    <div className="name">
                        <h1>Joanna Rosenbaum</h1>
                        <h2>Ing. Sistemas de la información</h2>
                        <h2>Chiapas, México</h2>
                    </div>
                    </div>
                    <div className="section-right">
                    <div className="hobbies">
                        <h1>Intereses</h1>
                    </div>
                </div>
                </div>
            </div>
            <div className="right-pane" />
        </div>
    );
}